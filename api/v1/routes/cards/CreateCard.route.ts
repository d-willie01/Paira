import { Request, Response } from "express";
import * as UserService from "../../services/User.service";
import * as CardService from "../../services/Card.service";
import Joi from "joi";
import jwt from 'jsonwebtoken';
import j2s from 'joi-to-swagger';
import { Company } from "../../models/Company.model";
import { transformCard } from "../../transformers/card.transformer";
import { Role, User } from "../../models/User.model";
import { ObjectId } from "mongodb";

export interface CreateCardRequestBody {
    title: string;
    company: Company | ObjectId;
    createdBy: User | ObjectId;
    isActive: boolean;
    description?: string;
}

export interface CreateCardRequest extends Request {
    auth?: jwt.JwtPayload,
    body: CreateCardRequestBody;
}

const schema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().optional()
});

export default async function (request: CreateCardRequest, response: Response): Promise<Response> {
    try {
        const validation = schema.validate(request.body);
        if (validation.error) {
            return response.status(400).json({ error: validation.error });
        };

        const cardCreator = await UserService.getUserByAuthProviderId(request.auth!.sub!);
        if (!cardCreator) {
            return response.status(404).json({ error: "user not found" });
        };

        if (!cardCreator.company) {
            return response.status(404).json({ error: "company not found" })
        }

        // checks if user has contributor or greater access
        if (cardCreator.role === undefined || cardCreator.role > 1) {
            return response.status(403).json({ error: "you do not have sufficient privileges to create a card" })
        }

        const { title, description } = request.body;

        const allCompanyCards = await CardService.getCardsByCompany(cardCreator.company._id);
        const isFirstCard = allCompanyCards?.length === 0 ? true : false;

        const newCard = await CardService.createCard({
            title,
            description,
            company: cardCreator.company._id,
            isActive: isFirstCard,
            createdBy: cardCreator._id
        })

        const newCardResponse = transformCard(newCard!)

        return response.status(201).json(newCardResponse)

    } catch (err) {
        return response.status(500).json({ error: err });
    }
}

export const swCreateCardRouter = {
    "/cards": {
        "post": {
            "summary": "create a card",
            "tags": ["/cards"],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            ...j2s(schema).swagger
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "success"
                },
                "400": {
                    "description": "bad request or invalid credentials"
                },
                "403": {
                    "description": "unauthorized"
                },
                "404": {
                    "description": "user or company not found"
                },
                "500": {
                    "description": "internal server error"
                }
            }
        }
    }
}