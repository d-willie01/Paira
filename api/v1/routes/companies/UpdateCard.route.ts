import { Request, Response } from "express";
import * as UserService from "../../services/User.service";
import * as CardService from "../../services/Card.service";
import Joi from "joi";
import jwt from 'jsonwebtoken';
import j2s from 'joi-to-swagger';
import { transformCard } from "../../transformers/card.transformer";
import { Card } from "../../models/Card.model";

export interface UpdateCardRequestBody {
    title?: string;
    isActive?: boolean;
    description?: string;
}

export interface CreateCardRequest extends Request {
    auth?: jwt.JwtPayload,
    body: UpdateCardRequestBody;
    params: {
        cardId: string;
    };
}

const schema = Joi.object().keys({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    isActive: Joi.boolean().optional()
});

export default async function (request: CreateCardRequest, response: Response): Promise<Response> {
    try {
        const validation = schema.validate(request.body);
        if (validation.error) {
            return response.status(400).json({ error: validation.error });
        };

        const card: Card = await CardService.getCardById(request.params.cardId);

        const user = await UserService.getUserByAuthProviderId(request.auth!.sub!);
        if (!user) {
            return response.status(404).json({ error: "user not found" });
        };

        if (!user.company) {
            return response.status(404).json({ error: "company not found" })
        }

        if (user.company.toString() !== card.company.toString()) {
            return response.status(403).json({ error: "you do not have sufficient privileges to create a card" })
        }

        // checks if user has contributor or greater access
        if (user.role === undefined || user.role > 1) {
            return response.status(403).json({ error: "you do not have sufficient privileges to create a card" })
        }

        let activeCard = new Card();
        if (request.body.isActive) {
            activeCard = await CardService.getActiveCardByCompanyId(card.company)
        }

        const updatedCard = await CardService.updateCard(card._id, request.body)

        await CardService.updateCard(activeCard._id, {
            isActive: false
        })

        const updatedCardResponse = transformCard(updatedCard!)

        return response.status(200).json(updatedCardResponse)

    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err });
    }
}

export const swUpdateCardRoute = {
    "/companies/{companyId}/cards/{cardId}": {
        "patch": {
            "summary": "update a card",
            "tags": ["/companies"],
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
                "200": {
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