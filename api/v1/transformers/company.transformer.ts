import { isDocument } from "@typegoose/typegoose";
import { Company, Industry } from "../models/Company.model";
import { Location, State } from "../utils/location.util";
import { UserResponse } from "./user.transformer";

export interface CompanyResponse {
    _id: string;
    name: string;
    bio?: string;
    cardKeys?: string[];
    founded?: string;
    industry: string;
    address: {
        street_1: string;
        street_2?: string;
        state: string;
        zipCode: string;
    }
    location: Location;
    createdBy: UserResponse | string;
    createdAt: Date;
    updatedAt: Date;
}

export const transformCompany = (company: Company): CompanyResponse => ({
    _id: company._id.toString(),
    name: company.name,
    bio: company.bio,
    cardKeys: company.cardKeys,
    founded: company.founded,
    industry: Industry[company.industry],
    address: {
        street_1: company.address.street_1,
        street_2: company.address.street_2,
        state: State[company.address.state],
        zipCode: company.address.zipCode
    },
    location: company.location,
    createdBy: isDocument(company.createdBy) ? {
        _id: company.createdBy._id.toString(),
        firstName: company.createdBy.firstName,
        lastName: company.createdBy.lastName,
        createdAt: company.createdBy.createdAt,
        updatedAt: company.createdBy.updatedAt
    } : company.createdBy,
    createdAt: company.createdAt,
    updatedAt: company.updatedAt

});