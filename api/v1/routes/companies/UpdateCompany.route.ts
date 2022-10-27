import { Request, Response } from "express";
import * as CompanyService from "../../services/Company.service";
import Joi from "joi";
import { NotFoundError } from "../../utils/errors.util";

export interface UpdateCompanyRequestBody {
    cardKeys: string[];
}

export interface UpdateCompanyRequest extends Request {
    body: UpdateCompanyRequestBody;
}

export default async function (request: UpdateCompanyRequest, response: Response): Promise<Response> {
    try {
        const schema = Joi.object().keys({
            cardKeys: Joi.array().items(Joi.string()).optional()
        });
        const validation = schema.validate(request.body);

        if (validation.error) {
            return response.status(400).json({ error: validation.error });
        }

        const company = await CompanyService.getCompanyByCompanyId(request.params.companyId);
        if(!company) {
            throw new NotFoundError(`company--${request.params.companyId}--not found`)
        }
        const updatedCompany = await CompanyService.updateCompanyCardKeys(request.params.companyId, request.body.cardKeys);

        return response.status(200).json(updatedCompany);
    }
    catch (err) {
        return response.status(500).json({ error: err });
    }
}
