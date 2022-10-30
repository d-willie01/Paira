import { Request, Response } from "express";
import * as AuthService from "../../services/Auth.service";
import Joi from "joi";
import { InvalidCredentialsError, TooManyAttemptsError } from "../../utils/errors.util";
import j2s from 'joi-to-swagger';

export interface SigninRequestBody {
    email: string;
    password: string;
}

export interface SigninRequest extends Request {
    body: SigninRequestBody;
}

const schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
});
export default async function (request: SigninRequest, response: Response): Promise<Response> {
    const validation = schema.validate(request.body);

    const { email, password } = request.body;
    if (validation.error) {
        return response.status(400).json({ error: validation.error });
    }

    try {
        const loginResponse = await AuthService.SignIn({
            email,
            password
        });

        return response.status(200).json({ token: loginResponse.id_token });
    }
    catch (err) {
        if (err instanceof InvalidCredentialsError) {
            return response.status(400).json({ error: err.message });
        } else if (err instanceof TooManyAttemptsError) {
            return response.status(429).json({ error: err.description });
        } else {
            return response.status(500).json({ error: err });
        }
    }
}

export const swSignInRouter = {
    "/auth/signin": {
        "post": {
            "summary": "sign in and retrieve a Json Web Token",
            "tags": ["User Log In"],
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
                "429": {
                    "description": "too many attempts"
                },
                "500": {
                    "description": "internal server error"
                }
            }
        }
    }
}
