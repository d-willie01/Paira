import { CompanyModel, Company, Industry } from '../models/Company.model';
import { CreateCompanyRequestBody } from '../routes/companies/CreateCompany.route';
import { Location, State } from '../utils/location.util';
import { ObjectId } from 'mongodb';

export interface ExistingCompanySearchParams {
    name: string;
    street_1: string;
    street_2: string;
    city: string;
    state: string;
    zipCode: string;
}
export const getCompanyByNameAndAddress = async (request: ExistingCompanySearchParams) => {
    const { name, street_1, street_2, city, state, zipCode } = request;
    const existingCompany = await CompanyModel.findOne({
        name,
        "address.street_1": street_1,
        "address.street_2": street_2,
        "address.city": city,
        "address.state": State[state],
        "address.zipCode": zipCode
    }).collation({ locale: 'en', strength: 1 });
    return existingCompany
}

export const createCompany = async (request: CreateCompanyRequestBody): Promise<Company> => {
    const { name, industry, street_1, street_2, city, state, zipCode, createdBy, location, bio, founded } = request;
    const newCompany = await CompanyModel.create({
        name,
        industry: Industry[industry],
        address: {
            street_1,
            street_2,
            city,
            state: State[state],
            zipCode
        },
        location,
        createdBy,
        bio,
        founded
    });
    return newCompany;
};

export const getCompanyByCompanyId = async (companyId: string | ObjectId): Promise<Company> => {
    const company = await CompanyModel.findOne({ _id: companyId });
    if (!company) throw new Error(`Error getting company ${companyId}`);
    return company;
};

export interface UpdateCompanyPayload {
    bio?: string;
    founded?: string;
    industry?: Industry;
    name?: string;
}
export const updateCompany = async (_id: string | ObjectId, updates: UpdateCompanyPayload): Promise<Company> => {
    const updatedCompany = await CompanyModel.findOneAndUpdate({ _id }, { $set: updates }, { new: true });
    return updatedCompany;
};

export interface UpdateCompanyAddressPayload {
    street_1: string;
    street_2: string;
    city: string;
    state: State;
    zipCode: string;
    location: Location
}
export const updateCompanyAddress = async (_id: string | ObjectId, updates: UpdateCompanyAddressPayload): Promise<Company> => {
    const updatedCompany = await CompanyModel.findOneAndUpdate({ _id }, {
        $set: {
            "address.street_1": updates.street_1,
            "address.street_2": updates.street_2,
            "address.city": updates.city,
            "address.state": updates.state,
            "address.zipCode": updates.zipCode,
            location: updates.location
        }
    }, { new: true });
    return updatedCompany;
};

export const updateCompanyCardKeys = async (_id: string | ObjectId, cardKeys: string[]): Promise<Company> => {
    const updatedCompany = await CompanyModel.findOneAndUpdate({ _id }, { $set: { cardKeys } }, { new: true });
    return updatedCompany;
};

export const updateCompanyAvatar = async (companyId: string | ObjectId, image: string): Promise<Company> => {
    const updatedUser = await CompanyModel.findOneAndUpdate({ _id: companyId }, {
        avatar: image
    }, { new: true });
    return updatedUser;
}