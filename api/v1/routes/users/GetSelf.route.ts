import { Request, Response } from "express";
import * as UserService from '../../services/User.service';
import jwt from 'jsonwebtoken'

export interface GetSelfRequest extends Request {
    auth?: jwt.JwtPayload
}

export default async (request: GetSelfRequest, response: Response): Promise<Response> => {
    const { auth } = request;
    try {
        const requester = await UserService.getUserByAuthProviderId(auth!.sub!);
        return response.status(200).json(requester);
    }
    catch (err) {
        return response.status(500).json({ error: err });
    }
}