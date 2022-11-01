import { Request, Response } from "express";
import * as UserService from '../../services/User.service';
import jwt from 'jsonwebtoken'
import { transformSelf } from "../../transformers/user.transformer";
import Joi from "joi";
import j2s from 'joi-to-swagger';

export interface UploadUserAvatarRequest extends Request {
    auth?: jwt.JwtPayload
    body: UploadUserAvatarRequestBody
}
export interface UploadUserAvatarRequestBody {
    image: string;
}

const schema = Joi.object().keys({
    image: Joi.string().required()
});

export default async (request: UploadUserAvatarRequest, response: Response): Promise<Response> => {
    const { auth } = request;
    try {
        const user = await UserService.getUserByAuthProviderId(request.auth!.sub!);
        if (!user) {
            return response.status(404).json({ error: "user not found" });
        };

        if (user._id.toString() !== request.params.userId) {
            return response.status(403).json({ error: "unauthorized" });
        };

        // TODO: upload image

        const updatedUser = await UserService.updateUserAvatar(user._id, request.body.image);

        const userResponse = transformSelf(updatedUser)

        return response.status(200).json(userResponse);
    }
    catch (err) {
        console.error(err);
        return response.status(500).json({ error: err });
    }
}

export const swUpdateUserAvatar = {
    "/users/{userId}/avatar": {
        "patch": {
            "summary": "upload user profile image",
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
                "200": {
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