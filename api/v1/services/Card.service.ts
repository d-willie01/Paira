import { ObjectId } from 'mongodb';
import { Card, CardModel } from '../models/Card.model';
import { CreateCardRequestBody } from '../routes/cards/CreateCard.route';

export const createCard = async (request: CreateCardRequestBody) => {
    const { title, description, company, createdBy } = request;
    try {
        const newCard = await CardModel.create({
            title,
            description,
            company,
            createdBy
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