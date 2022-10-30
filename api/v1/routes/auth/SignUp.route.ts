import { Request, Response } from "express";
import * as AuthService from "../../services/Auth.service";
import * as UserService from "../../services/User.service";
import Joi from "joi";
import { BadRequestError, InvalidEmailError, PasswordStrengthError } from "../../utils/errors.util";
import jwt from 'jsonwebtoken';
import { User } from "../../models/User.model";
import { transformUser } from "../../transformers/user.transformer";
import j2s from 'joi-to-swagger';

export interface SignupRequestBody {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

export interface SignupRequest extends Request {
    body: SignupRequestBody;
}

const schema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    passwordConfirmation: Joi.string().required()
});
export default async function (request: SignupRequest, response: Response): Promise<Response> {
    const validation = schema.validate(request.body);

    const { firstName, lastName, email, password, passwordConfirmation } = request.body;
    if (validation.error) {
        return response.status(400).json({ error: validation.error });
    }

    if (password !== passwordConfirmation) {
        return response.status(400).json({ error: "passwords must match" });
    }

    const userAlreadyExists = await UserService.userAlreadyExists(email);

    if (userAlreadyExists) {
        return response.status(409).json({ error: "user already exists" });
    }

    try {
        await AuthService.SignUp({
            email,
            password
        });

        const loginResponse = await AuthService.SignIn({
            email,
            password
        });

        const decodedJwt: jwt.JwtPayload = jwt.decode(loginResponse.id_token, { json: true })!;

        const newUserPayload = new User();
        newUserPayload.firstName = firstName;
        newUserPayload.lastName = lastName;
        newUserPayload.authProviderId = decodedJwt.sub;
        newUserPayload.email = email;

        const newUser = await UserService.createUser(newUserPayload);

        const userResponse = transformUser(newUser);

        return response.status(201).json({
            token: loginResponse.id_token,
            user: userResponse
        });
    } catch (err) {
        if (err instanceof PasswordStrengthError) {
            return response.status(400).json({ error: err.message, policy: err.policy });
        } else if (err instanceof InvalidEmailError) {
            return response.status(400).json({ error: err.message });
        } else if (err instanceof BadRequestError) {
            return response.status(400).json({ error: err.message })
        } else {
            return response.status(500).json({ error: err });
        }
    }
}

export const swSignUpRouter = {
    "/auth/signup": {
        "post": {
            "summary": "sign up as a Paira user and retrieve a Json Web Token",
            "tags": ["/auth"],
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
                "400": {
                    "description": "bad or invalid request"
                },
                "409": {
                    "description": "user already exists"
                },
                "500": {
                    "description": "internal server error"
                }
            }
        }
    }
}