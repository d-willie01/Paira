import { Request, Response } from "express";
import * as CompanyService from "../../services/Company.service";
import * as UserService from "../../services/User.service";
import Joi from "joi";
import jwt from 'jsonwebtoken';
import { Role, User } from "../../models/User.model";
import { getCoordinatesByAddress, Location, State } from "../../utils/location.util";
import { transformCompany } from "../../transformers/company.transformer";
import j2s from 'joi-to-swagger';
import { Industry } from "../../models/Company.model";

export interface CreateCompanyRequestBody {
    name: string;
    industry: string;
    street_1: string;
    street_2: string;
    city: string;
    state: string;
    zipCode: string;
    location: Location
    createdBy: User;
    bio?: string;
    founded?: string;
}

export interface CreateCompanyRequest extends Request {
    auth?: jwt.JwtPayload,
    body: CreateCompanyRequestBody;
}

const schema = Joi.object().keys({
    name: Joi.string().required(),
    industry: Joi.string().required(),
    street_1: Joi.string().required(),
    street_2: Joi.string().required().allow(""),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.string().required(),
    bio: Joi.string().optional(),
    founded: Joi.string().optional()
});

export default async function (request: CreateCompanyRequest, response: Response): Promise<Response> {
    try {
        const validation = schema.validate(request.body);
        if (validation.error) {
            return response.status(400).json({ error: validation.error });
        };

        const { name, industry, street_1, street_2, city, state, zipCode, bio, founded } = request.body;

        const companyAlreadyExists = await CompanyService.getCompanyByNameAndAddress({
            name,
            street_1,
            street_2,
            city,
            state: state.toUpperCase(),
            zipCode
        });

        if (companyAlreadyExists) {
            return response.status(409).json({ error: `company ${name} already exists at ${street_1} ${city}, ${state} ${zipCode}` })
        }

        const companyCreator = await UserService.getUserByAuthProviderId(request.auth!.sub!);
        if (!companyCreator) {
            return response.status(404).json({ error: "user not found" });
        };

        if (!State[state.toUpperCase()]) {
            return response.status(400).json({ error: `please provide a valid two digit state code` });
        }

        if (!Industry[industry.toLowerCase()]) {
            return response.status(400).json({ error: `please provide a valid industry` });
        }

        const coordinates = await getCoordinatesByAddress({
            street_1,
            street_2,
            city,
            state: State[state.toUpperCase()],
            zipCode
        })

        const newCompany = await CompanyService.createCompany({
            name,
            industry: industry.toLowerCase(),
            street_1,
            street_2,
            city,
            state: state.toUpperCase(),
            zipCode,
            location: {
                type: "Point",
                coordinates
            },
            createdBy: companyCreator,
            bio,
            founded
        });

        companyCreator.company = newCompany
        companyCreator.role = Role["owner"];
        await UserService.updateUser(companyCreator._id, companyCreator)

        const companyResponse = transformCompany(newCompany);

        return response.status(201).json(companyResponse);
    }
    catch (err) {
        return response.status(500).json({ error: err });
    }
}

export const swCreateCompanyRouter = {
    "/companies": {
        "post": {
            "summary": "register a your company with Paira",
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
                "404": {
                    "description": "user not found"
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