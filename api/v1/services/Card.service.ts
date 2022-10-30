import { Card, CardModel } from '../models/Card.model';
import { CreateCardRequestBody } from '../routes/cards/CreateCard.route';

export const createCard = async (request: CreateCardRequestBody) => {
    const { title, description, company, createdBy } = request;
    try {
        console.log(request)
        const newCard = await CardModel.create({
            title,
            description,
            company,
            createdBy
        });
        return newCard;
    } catch (err) {
        console.log(err)
    }
};