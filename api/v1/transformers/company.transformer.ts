import { isDocument } from "@typegoose/typegoose";
import { Company, Industry } from "../models/Company.model";
import { State } from "../utils/location.util";
import { UserResponse } from "./user.transformer";

export interface CompanyResponse {
    _id: string;
    name: string;
    cardKeys?: string[];
    industry: string;
    address: {
        street_1: string;
        street_2?: string;
        state: string;
        zipCode: string;
    }
    coordinates: {
        lat: string;
        long: string;
    }
    createdBy: UserResponse | string;
    createdAt: Date;
    updatedAt: Date;
}

export const transformCompany = (company: Company): CompanyResponse => ({
    _id: company._id.toString(),
    name: company.name,
    cardKeys: company.cardKeys,
    industry: Industry[company.industry],
    address: {
        street_1: company.address.street_1,
        street_2: company.address.street_2,
        state: State[company.address.state],
        zipCode: company.address.zipCode
    },
    coordinates: {
        lat: company.coordinates.lat,
        long: company.coordinates.long
    },
    createdBy: isDocument(company.createdBy) ? {
        _id: company.createdBy._id.toString(),
        firstName: company.createdBy.firstName,
        lastName: company.createdBy.lastName,
        createdAt: company.createdBy.createdAt,
        updatedAt: company.createdBy.updatedAt
    } : company.createdBy!.toString(),
    createdAt: company.createdAt,
    updatedAt: company.updatedAt

});