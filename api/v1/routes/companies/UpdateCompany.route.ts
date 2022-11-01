import { Request, Response } from "express";
import * as CompanyService from "../../services/Company.service";
import * as UserService from "../../services/User.service";
import Joi from "joi";
import jwt from 'jsonwebtoken';
import j2s from 'joi-to-swagger';
import { NotFoundError } from "../../utils/errors.util";
import { Industry } from "../../models/Company.model";
import { State } from "../../utils/location.util";
import { transformCompany } from "../../transformers/company.transformer";

export interface UpdateCompanyRequestBody {
    bio?: string;
    founded?: string;
    industry?: string;
    name?: string;
}

export interface UpdateCompanyRequest extends Request {
    body: UpdateCompanyRequestBody;
    params: {
        companyId: string;
    }
    auth?: jwt.JwtPayload,
}

const schema = Joi.object().keys({
    bio: Joi.string().optional(),
    founded: Joi.string().optional(),
    industry: Joi.string().optional(),
    name: Joi.string().optional()
});

export default async function (request: UpdateCompanyRequest, response: Response): Promise<Response> {
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
            return response.status(403).json({ error: "you do not have sufficient privileges to update this company" })
        }

        // checks if user has contributor or greater access
        if (requester.role === undefined || requester.role > 1) {
            return response.status(403).json({ error: "you do not have sufficient privileges to update this company" })
        }

        const company = await CompanyService.getCompanyByCompanyId(request.params.companyId);
        if (!company) {
            throw new NotFoundError(`company--${request.params.companyId}--not found`)
        }

        const { bio, founded, industry, name } = request.body;

        if (industry) {
            if (!Industry[industry.toLowerCase()]) {
                return response.status(400).json({ error: `please provide a valid industry` });
            }
        }

        if (name) {
            const { street_1, street_2, city, state, zipCode } = company.address;
            const companyAlreadyExists = await CompanyService.getCompanyByNameAndAddress({
                name,
                street_1,
                street_2: street_2 ?? "",
                city,
                state: State[state].toUpperCase(),
                zipCode
            });
            if (companyAlreadyExists) {
                return response.status(409).json({ error: `company ${name} already exists at ${street_1} ${street_2} ${city}, ${state} ${zipCode}` })
            }
        }

        let updates: CompanyService.UpdateCompanyPayload = {}
        if (bio) updates.bio = bio;
        if (founded) updates.founded = founded;
        if (industry) updates.industry = Industry[industry];
        if (name) updates.name = name;

        const updatedCompany = await CompanyService.updateCompany(request.params.companyId, updates);

        const companyResponse = transformCompany(updatedCompany);

        return response.status(200).json(companyResponse);
    }
    catch (err) {
        console.error(err);
        return response.status(500).json({ error: err });
    }
}

export const swUpdateCompany = {
    "/companies/{companyId}": {
        "patch": {
            "summary": "update your company",
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
                "200": {
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
                "409": {
                    "description": "company already exists"
                },
                "500": {
                    "description": "internal server error"
                }
            }
        }
    }
}
