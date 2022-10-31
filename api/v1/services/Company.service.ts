import { mongoose } from '@typegoose/typegoose';
import { CompanyModel, Company, Industry } from '../models/Company.model';
import { CreateCompanyRequestBody } from '../routes/companies/CreateCompany.route';
import { State } from '../utils/location.util';

export interface ExistingCompanySearchParams {
    name: string;
    street_1: string;
    city: string;
    state: string;
    zipCode: string;
}
export const getCompanyByNameAndAddress = async (request: ExistingCompanySearchParams) => {
    const { name, street_1, city, state, zipCode } = request;
    const existingCompany = await CompanyModel.findOne({
        name,
        "address.street_1": street_1,
        "address.city": city,
        "address.state": State[state],
        "address.zipCode": zipCode
    });
    return existingCompany
}

export const createCompany = async (request: CreateCompanyRequestBody): Promise<Company> => {
    const { name, industry, street_1, street_2, city, state, zipCode, createdBy, coordinates, bio, founded } = request;
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
        coordinates,
        createdBy,
        bio,
        founded
    });
    return newCompany;
};

export const getCompanyByCompanyId = async (companyId: string | mongoose.Types.ObjectId): Promise<Company> => {
    const company = await CompanyModel.findOne({ _id: companyId });
    if (!company) throw new Error(`Error getting company ${companyId}`);
    return company;
};

export const updateCompanyCardKeys = async (_id: string | mongoose.Types.ObjectId, cardKeys: string[]): Promise<Company> => {
    const updatedCompany = await CompanyModel.findOneAndUpdate({ _id }, { $set: { cardKeys } }, { new: true });
    if (!updatedCompany) throw new Error(`Error updating company ${_id}`);
    return updatedCompany;
};