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

export interface GetCardsRequest extends Request {
    params: {
        companyId: string;
    };
    auth?: jwt.JwtPayload,
}

export default async function (request: GetCardsRequest, response: Response): Promise<Response> {
    try {
        const requester = await UserService.getUserByAuthProviderId(request.auth!.sub!);
        if (!requester) {
            return response.status(404).json({ error: "user not found" });
        };

        // checks if user belongs to company
        if (requester.company?._id.toString() !== request.params.companyId) {
            return response.status(403).json({ error: "you do not have sufficient privileges to view this company's cards" })
        }

        // checks if user has contributor or greater access
        if (requester.role === undefined || requester.role > 1) {
            return response.status(403).json({ error: "you do not have sufficient privileges to view this company's cards" })
        }

        const companyCards = await CardService.getCardsByCompany(request.params.companyId)
        if (!companyCards) {
            return response.status(200).json([]);
        }

        const cardsResponse = companyCards.map(card => transformCard(card))
        return response.status(200).json(cardsResponse)

    } catch (err) {
        return response.status(500).json({ error: err });
    }
}

export const swGetCompanyCardsRouter = {
    "/companies/:companyId/cards": {
        "get": {
            "summary": "get all company cards",
            "tags": ["/companies"],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "success"
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