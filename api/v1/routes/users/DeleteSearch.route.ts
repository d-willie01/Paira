import { Request, Response } from "express";
import * as UserService from "../../services/User.service";
import jwt from 'jsonwebtoken';

export interface LikeCardRequest extends Request {
    auth?: jwt.JwtPayload,
    params: {
        userId: string;
        searchId: string;
    };
}

export default async function (request: LikeCardRequest, response: Response): Promise<Response> {
    try {
        const user = await UserService.getUserByAuthProviderId(request.auth!.sub!);
        if (!user) {
            return response.status(404).json({ error: "user not found" });
        };

        if (user._id.toString() !== request.params.userId) {
            return response.status(403).json({ error: "unauthorized" });
        };

        const search = await UserService.getSavedSearch(request.params.userId, request.params.searchId);

        if (!search) {
            return response.status(404).json({ error: "search not found" });
        }

        await UserService.deleteSearch(user._id, request.params.searchId);

        return response.status(200).json(search);
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err });
    }
}

export const swDeleteSearch = {
    "/users/{userId}/searches/{searchId}": {
        "delete": {
            "summary": "delete a saved search query",
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
                "204": {
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