import { Request, Response } from "express";
import * as CompanyService from "../../services/Company.service";
import { Company } from "../../models/Company.model";

export default async function (request: Request, response: Response): Promise<Response> {
    try {
        const searchParameters = new Company();
        searchParameters.cardKeys = request.query.filter as string[];

        const companies = await CompanyService.getCompanies(searchParameters)
        
        return response.status(200).json(companies);
    }
    catch (err) {
        return response.status(500).json({ error: err });
    }
}
