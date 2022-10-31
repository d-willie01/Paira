import { Request, Response } from "express";
import * as CardService from "../../services/Card.service";
import jwt from 'jsonwebtoken';
import { Company, Industry } from "../../models/Company.model";
import { transformCard } from "../../transformers/card.transformer";
import Joi from "joi";

export interface GetCardsRequest extends Request {
    query: qs.ParsedQs;
    auth?: jwt.JwtPayload,
}

export default async function (request: GetCardsRequest, response: Response): Promise<Response> {
    try {
        const searchParameters = new Company();
        searchParameters.cardKeys = request.query.cardKeys as string[];
        searchParameters.industry = Industry[request.query.industry as string];

        const companyCards = await CardService.getCardsByQuery(searchParameters)
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
    "/cards": {
        "get": {
            "summary": "get cards by industry and card keys",
            "tags": ["/cards"],
            "responses": {
                "200": {
                    "description": "success"
                },
                "500": {
                    "description": "internal server error"
                }
            }
        }
    }
}