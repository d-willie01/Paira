import { Request, Response } from "express";
import * as CompanyService from "../../services/Company.service";
import * as UserService from "../../services/User.service";
import Joi from "joi";
import jwt from 'jsonwebtoken';
import { User } from "../../models/User.model";
import { Coordinates, getCoordinatesByAddress, State } from "../../utils/location.util";
import { transformCompany } from "../../transformers/company.transformer";

export interface CreateCompanyRequestBody {
    name: string;
    industry: string;
    street_1: string;
    street_2?: string;
    city: string;
    state: State;
    zipCode: string;
    coordinates: Coordinates;
    createdBy: User;
}

export interface CreateCompanyRequest extends Request {
    auth?: jwt.JwtPayload,
    body: CreateCompanyRequestBody;
}

export default async function (request: CreateCompanyRequest, response: Response): Promise<Response> {
    try {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            industry: Joi.string().required(),
            street_1: Joi.string().required(),
            street_2: Joi.string().optional(),
            city: Joi.string().required(),
            state: Joi.string().max(2).required(),
            zipCode: Joi.string().max(5).required()
        });
        const validation = schema.validate(request.body);
        if (validation.error) {
            return response.status(400).json({ error: validation.error });
        };

        const { name, industry, street_1, street_2, city, state, zipCode } = request.body;

        const companyAlreadyExists = await CompanyService.getCompanyByNameAndAddress({
            name,
            street_1,
            city,
            state,
            zipCode
        });

        if (companyAlreadyExists) {
            return response.status(409).json({ error: `company ${name} already exists at ${street_1} ${city}, ${state} ${zipCode}` })
        }

        const companyCreator = await UserService.getUserByAuthProviderId(request.auth!.sub!);
        if (!companyCreator) {
            return response.status(404).json({ error: "user not found" });
        };

        const coordinates = await getCoordinatesByAddress({
            street_1,
            street_2,
            city,
            state,
            zipCode
        })

        const newCompany = await CompanyService.createCompany({
            name,
            industry,
            street_1,
            street_2,
            city,
            state,
            zipCode,
            coordinates,
            createdBy: companyCreator
        });

        const companyResponse = transformCompany(newCompany);

        return response.status(201).json(companyResponse);
    }
    catch (err) {
        return response.status(500).json({ error: err });
    }
}
