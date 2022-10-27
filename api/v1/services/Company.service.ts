import { mongoose } from '@typegoose/typegoose';
import { CompanyModel, Company } from '../models/Company.model';
import { CreateCompanyRequestBody } from '../routes/companies/CreateCompany.route';

export const createCompany = async (company: CreateCompanyRequestBody): Promise<Company> => {
    const newCompany = await CompanyModel.create(company);
    return newCompany;
};

export const getCompanies = async (filters: Partial<Company>): Promise<Company[]> => {
    let searchParams = {};
    if(filters.cardKeys) {
        searchParams["cardKeys"] = { $all: filters.cardKeys };
    }
    
    const companies = await CompanyModel.find(searchParams);
    return companies;
};

export const getCompanyByCompanyId = async (companyId: string | mongoose.Types.ObjectId): Promise<Company> => {    
    const company = await CompanyModel.findOne({_id: companyId});
    if (!company) throw new Error(`Error getting company ${companyId}`);
    return company;
};

export const updateCompanyCardKeys = async (_id: string | mongoose.Types.ObjectId, cardKeys: string[]): Promise<Company> => {
    const updatedCompany = await CompanyModel.findOneAndUpdate({ _id }, { $set: { cardKeys } }, { new: true });
    if (!updatedCompany) throw new Error(`Error updating company ${_id}`);
    return updatedCompany;
};