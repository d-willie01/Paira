import { Request, Response } from "express";
import * as CompanyService from "../../services/Company.service";
import Joi from "joi";

export interface CreateCompanyRequestBody {
    name: string;
}

export interface CreateCompanyRequest extends Request {
    body: CreateCompanyRequestBody;
}

export default async function (request: CreateCompanyRequest, response: Response): Promise<Response> {
    try {
        const schema = Joi.object().keys({
            name: Joi.string().required()
        });
        const validation = schema.validate(request.body);

        if (validation.error) {
            return response.status(400).json({ error: validation.error });
        }
        
        const newCompany = await CompanyService.createCompany(request.body);

        return response.status(201).json(newCompany);
    }
    catch (err) {
        return response.status(500).json({ error: err });
    }
}
