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