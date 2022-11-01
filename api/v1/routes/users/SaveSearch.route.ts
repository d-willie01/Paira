import { Request, Response } from "express";
import * as UserService from "../../services/User.service";
import Joi from "joi";
import jwt from 'jsonwebtoken';
import j2s from 'joi-to-swagger';
import { Search } from "../../models/User.model";
import { Industry } from "../../models/Company.model";
import { ObjectId } from 'mongodb'

export interface LikeCardRequest extends Request {
    auth?: jwt.JwtPayload,
    params: {
        userId: string;
    };
    body: Search
}

const schema = Joi.object().keys({
    industry: Joi.string().required(),
    cardKeys: Joi.array().items(Joi.string()).optional(),
});

export default async function (request: LikeCardRequest, response: Response): Promise<Response> {
    try {
        const validation = schema.validate(request.body);

        if (validation.error) {
            return response.status(400).json({ error: validation.error });
        };

        if (!Industry[request.body.industry.toLowerCase()]) {
            return response.status(400).json({ error: `please provide a valid industry` });
        }

        const user = await UserService.getUserByAuthProviderId(request.auth!.sub!);
        if (!user) {
            return response.status(404).json({ error: "user not found" });
        };

        if (user._id.toString() !== request.params.userId) {
            return response.status(403).json({ error: "unauthorized" });
        };

        const newSearch = new Search();
        newSearch._id = new ObjectId()
        newSearch.cardKeys = request.body.cardKeys ?? [];
        newSearch.industry = request.body.industry;
        const savedSearches = await UserService.saveSearch(user._id, newSearch);

        return response.status(201).json(savedSearches)

    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err });
    }
}

export const swSaveSearch = {
    "/users/{userId}/searches": {
        "post": {
            "summary": "save a search query",
            "tags": ["/users"],
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
                "403": {
                    "description": "unauthorized"
                },
                "404": {
                    "description": "user not found"
                },
                "500": {
                    "description": "internal server error"
                }
            }
        }
    }
}