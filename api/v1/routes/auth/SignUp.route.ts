import { Request, Response } from "express";
import * as AuthService from "../../services/Auth.service";
import * as UserService from "../../services/User.service";
import Joi from "joi";
import { BadRequestError, InvalidEmailError, PasswordStrengthError } from "../../utils/errors.util";
import jwt from 'jsonwebtoken';
import { User } from "../../models/User.model";

export interface SignupRequestBody {
    email: string;
    password: string;
    passwordConfirmation: string;
}

export interface SignupRequest extends Request {
    body: SignupRequestBody;
}

export default async function (request: SignupRequest, response: Response): Promise<Response> {
    const schema = Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
        passwordConfirmation: Joi.string().required()
    });
    const validation = schema.validate(request.body);

    const { email, password, passwordConfirmation } = request.body;
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
    }
    catch (err) {
        if (err instanceof PasswordStrengthError) {
            return response.status(400).json({ error: err.message, policy: err.policy });
        } else if (err instanceof InvalidEmailError) {
            return response.status(400).json({ error: err.message });
        } else if (err instanceof BadRequestError) {
            return response.status(400).json({ error: err.message })
        }
    }

    try {

        const loginResponse = await AuthService.SignIn({
            email,
            password
        });
        
        const decodedJwt: jwt.JwtPayload = jwt.decode(loginResponse.id_token, { json: true })!;

        const newUserPayload = new User();
        newUserPayload.authProviderId = decodedJwt.sub;
        newUserPayload.email = email;

        const newUser = await UserService.createUser(newUserPayload);

        return response.status(201).json({
            token: loginResponse.id_token,
            user: newUser
        });
    }
    catch (err) {
        return response.status(500).json({ error: err });
    }
}