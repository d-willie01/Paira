import { ObjectId } from 'mongodb';
import { CardModel } from '../models/Card.model';
import { Industry } from '../models/Company.model';
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
        if (searchParams.cardKeys) {
            filter["company.cardKeys"] = { $all: searchParams.cardKeys };
        }
        filter["company.industry"] = searchParams.industry;

        const companyCards = await CardModel.find(searchParams);
        return companyCards;
    } catch (err) {
        console.error(err)
    }
};