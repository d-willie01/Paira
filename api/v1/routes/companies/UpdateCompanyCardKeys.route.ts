import { Request, Response } from "express";
import * as CompanyService from "../../services/Company.service";
import * as UserService from "../../services/User.service";
import Joi from "joi";
import jwt from 'jsonwebtoken';
import j2s from 'joi-to-swagger';
import { NotFoundError } from "../../utils/errors.util";

export interface UpdateCompanyCardKeysRequest extends Request {
    body: string[];
    auth?: jwt.JwtPayload,
}

const schema = Joi.array().items(Joi.string()).required();

export default async function (request: UpdateCompanyCardKeysRequest, response: Response): Promise<Response> {
    try {
        const validation = schema.validate(request.body);

        if (validation.error) {
            return response.status(400).json({ error: validation.error });
        }

        const requester = await UserService.getUserByAuthProviderId(request.auth!.sub!);
        if (!requester) {
            return response.status(404).json({ error: "user not found" });
        };

        // checks if user belongs to company
        if (requester.company?._id.toString() !== request.params.companyId) {
            return response.status(403).json({ error: "you do not have sufficient privileges to view this company's cards" })
        }

        // checks if user has contributor or greater access
        if (requester.role === undefined || requester.role > 1) {
            return response.status(403).json({ error: "you do not have sufficient privileges to view this company's cards" })
        }

        const company = await CompanyService.getCompanyByCompanyId(request.params.companyId);
        if (!company) {
            throw new NotFoundError(`company--${request.params.companyId}--not found`)
        }
        const updatedCompany = await CompanyService.updateCompanyCardKeys(request.params.companyId, request.body);

        return response.status(200).json(updatedCompany);
    }
    catch (err) {
        return response.status(500).json({ error: err });
    }
}


export const swUpdateCompanyCardKeys = {
    "/companies/{companyId}/cardKeys": {
        "patch": {
            "summary": "update your company card keys",
            "tags": ["/companies"],
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
                    "description": "bad request or invalid credentials"
                },
                "403": {
                    "description": "unauthorized"
                },
                "404": {
                    "description": "user or company not found"
                },
                "500": {
                    "description": "internal server error"
                }
            }
        }
    }
}
