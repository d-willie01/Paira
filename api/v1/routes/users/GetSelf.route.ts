import { Request, Response } from "express";
import * as UserService from '../../services/User.service';
import jwt from 'jsonwebtoken'
import { transformSelf } from "../../transformers/user.transformer";

export interface GetSelfRequest extends Request {
    auth?: jwt.JwtPayload
}

export default async (request: GetSelfRequest, response: Response): Promise<Response> => {
    const { auth } = request;
    try {
        const self = await UserService.getUserByAuthProviderId(auth!.sub!);
        const selfResponse = transformSelf(self);
        return response.status(200).json(selfResponse);
    }
    catch (err) {
        return response.status(500).json({ error: err });
    }
}

export const swGetSelfRouter = {
    "/users/self": {
        "get": {
            "summary": "Retrieve your user document",
            "tags": ["/users"],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "success"
                },
                "500": {
                    "description": "internal server error"
                }
            }
        }
    }
}