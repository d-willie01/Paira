import { Request, Response } from "express";
import * as CardService from "../../services/Card.service";
import jwt from 'jsonwebtoken';
import { Industry } from "../../models/Company.model";
import { transformCardSearchResults } from "../../transformers/card.transformer";
import { GetCardsAggregateResponse } from "../../services/Card.service";

export interface GetCardsRequest extends Request {
    query: qs.ParsedQs;
    auth?: jwt.JwtPayload,
}

export default async function (request: GetCardsRequest, response: Response): Promise<Response> {
    try {
        if (!request.query.industry) {
            return response.status(400).json({ error: "you must include an industry in your search" })
        }
        if (!request.query.lat || !request.query.long) {
            return response.status(400).json({ error: "you must include lat and long coordinates in your search" })
        }
        if (!Industry[request.query.industry as string]) {
            return response.status(400).json({ error: "you must must enter a valid industry" })
        }

        const coordinates = [Number(request.query.long as string), Number(request.query.lat as string)];
        const searchResults = await CardService.getCardsByQuery({
            cardKeys: request.query.cardKeys as string[],
            industry: Industry[request.query.industry as string],
            coordinates,
            radius: request.query.radius ? Number(request.query.radius as string) : 50
        })

        if (!searchResults) {
            return response.status(200).json([]);
        }

        const cards = searchResults.map((result: GetCardsAggregateResponse) => transformCardSearchResults(result))

        return response.status(200).json(cards)
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err });
    }
}

export const swGetCardsRouter = {
    "/cards?industry=''&cardKeys=''&lat=''&long=''&radius=''": {
        "get": {
            "summary": "get active company cards by industry and card keys; sorted by distance",
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