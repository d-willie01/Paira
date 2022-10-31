import { Request, Response } from "express";
import * as CardService from "../../services/Card.service";
import jwt from 'jsonwebtoken';
import { Industry } from "../../models/Company.model";

export interface GetCardsRequest extends Request {
    query: qs.ParsedQs;
    auth?: jwt.JwtPayload,
}

export default async function (request: GetCardsRequest, response: Response): Promise<Response> {
    try {
        const coordinates = [Number(request.query.long as string), Number(request.query.lat as string)];
        const companyCards = await CardService.getCardsByQuery({
            cardKeys: request.query.cardKeys as string[],
            industry: Industry[request.query.industry as string],
            coordinates,
            radius: Number(request.query.radius as string)
        })

        if (!companyCards) {
            return response.status(200).json([]);
        }

        return response.status(200).json(companyCards)
    } catch (err) {
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