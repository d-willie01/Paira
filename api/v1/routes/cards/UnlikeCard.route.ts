import { Request, Response } from "express";
import * as UserService from "../../services/User.service";
import * as CardService from "../../services/Card.service";
import Joi from "joi";
import jwt from 'jsonwebtoken';
import j2s from 'joi-to-swagger';
import { transformCard } from "../../transformers/card.transformer";
import { Card } from "../../models/Card.model";

export interface UnlikeCardRequest extends Request {
    auth?: jwt.JwtPayload,
    params: {
        cardId: string;
    };
}

export default async function (request: UnlikeCardRequest, response: Response): Promise<Response> {
    try {
        const card: Card = await CardService.getCardById(request.params.cardId);

        const user = await UserService.getUserByAuthProviderId(request.auth!.sub!);
        if (!user) {
            return response.status(404).json({ error: "user not found" });
        };

        const updatedCard = await CardService.unlikeCard(card._id, user._id)

        const updatedCardResponse = transformCard(updatedCard)

        return response.status(200).json(updatedCardResponse)

    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err });
    }
}

export const swUnlikeCard = {
    "/cards/{cardId}/unlike": {
        "patch": {
            "summary": "unlike a card",
            "tags": ["/cards"],
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