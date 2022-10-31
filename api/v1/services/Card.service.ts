import { ObjectId } from 'mongodb';
import { CardModel } from '../models/Card.model';
import { Company, CompanyModel, Industry } from '../models/Company.model';
import { CreateCardRequestBody } from '../routes/cards/CreateCard.route';

export const createCard = async (request: CreateCardRequestBody) => {
    const { title, description, company, createdBy, isActive } = request;
    try {
        const newCard = await CardModel.create({
            title,
            description,
            company,
            createdBy,
            isActive
        });
        return newCard;
    } catch (err) {
        console.error(err)
    }
};

export const getCardsByCompany = async (company: ObjectId | string) => {
    try {
        const companyCards = await CardModel.find({ company })
        return companyCards;
    } catch (err) {
        console.error(err)
    }
};

export const getCardsByQuery = async (searchParams: { industry: Industry; cardKeys?: string[] }) => {
    try {

        let filter = {};
        filter["industry"] = searchParams.industry;
        if (searchParams.cardKeys) {
            filter["cardKeys"] = searchParams.cardKeys;
        }

        const companies = await CompanyModel.aggregate()
            .match(filter)
            .group({ _id: "$_id" })
            .exec();

        const cards = await CardModel.find({ company: companies, isActive: true }).exec();
        return cards;
    } catch (err) {
        console.error(err)
    }
};