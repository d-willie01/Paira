import { ObjectId } from 'mongodb';
import { Card, CardModel } from '../models/Card.model';
import { CompanyModel, Industry } from '../models/Company.model';
import { CreateCardRequestBody } from '../routes/companies/CreateCard.route';
import { UpdateCardRequestBody } from '../routes/companies/UpdateCard.route';
import { Location } from '../utils/location.util';

export const createCard = async (request: CreateCardRequestBody): Promise<Card> => {
    const { title, description, company, createdBy, isActive } = request;
    const newCard = await CardModel.create({
        title,
        description,
        company,
        createdBy,
        isActive
    });
    return newCard;
};

export const getActiveCardByCompanyId = async (companyId: ObjectId | string): Promise<Card> => {
    const card = await CardModel.findOne({ company: companyId, isActive: true })
    return card;
};


export const getCardById = async (cardId: ObjectId | string): Promise<Card> => {
    const card = await CardModel.findOne({ _id: cardId })
    return card;
};


export const getCardsByCompany = async (company: ObjectId | string): Promise<Card[]> => {
    const companyCards = await CardModel.find({ company })
    return companyCards;
};
export interface GetCardsAggregateResponse {
    _id: ObjectId;
    cardKeys: string[];
    name: string;
    industry: Industry;
    location: Location;
    title: string;
    description?: string;
    founded?: string;
    bio?: string;
    distance: number;
    createdBy: ObjectId;
    createdAt: Date;
    updatedAt: Date;
    card: Card
}
export const getCardsByQuery = async (searchParams: { industry: Industry; coordinates: number[]; radius?: number; cardKeys?: string[]; }): Promise<GetCardsAggregateResponse[]> => {
    let filter = {};
    filter["industry"] = searchParams.industry;
    filter["card.isActive"] = true;
    if (searchParams.cardKeys) {
        filter["cardKeys"] = searchParams.cardKeys;
    }

    const companies = await CompanyModel.aggregate()
        .near({ // $geoNear https://docs.mongodb.com/manual/reference/operator/aggregation/geoNear/
            near: { type: "Point", coordinates: searchParams.coordinates }, // Point rather than a Polygon. Think of this as the project "pin"
            distanceField: 'distance', // company's distance from the project (in meters). adds a "distance" field to the object returned by this pipeline stage.
            spherical: true, // because the earth is a sphere
            uniqueDocs: true // no duplicates allowed
        })
        .project({ // for more info on $project operator visit https://docs.mongodb.com/manual/reference/operator/aggregation/project/
            _id: 1,
            name: 1,
            bio: 1,
            founded: 1,
            cardKeys: 1,
            industry: 1,
            createdAt: 1,
            updatedAt: 1,
            location: 1,
            distance: { $divide: ["$distance", 1609.344] }, // convert meters to miles
        })
        .lookup({
            from: "cards", // look in users collection
            localField: "_id", // join against primaryUser
            foreignField: "company", // match against primaryUser._id in users collection
            as: "card" // save as property "primaryUser"
        })
        .unwind("$card")
        .sort({ "distance": 1 })
        .match(filter)
        .match({ distance: { '$lte': searchParams.radius ?? 50 } })
        .exec();

    return companies;
};

export const likeCard = async (cardId: string | ObjectId, userId: string | ObjectId): Promise<Card> => {
    const alreadyLiked = await CardModel.findOne({ _id: cardId, likes: { $in: new ObjectId(userId) } })
    if (!alreadyLiked) {
        const updatedCard = await CardModel.findOneAndUpdate({ _id: cardId },
            {
                $push: { likes: new ObjectId(userId) }
            },
            { new: true });
        return updatedCard;
    }
    return alreadyLiked
};

export const unlikeCard = async (cardId: string | ObjectId, userId: string | ObjectId): Promise<Card> => {
    const updatedCard = await CardModel.findOneAndUpdate({ _id: cardId },
        {
            $pull: { likes: new ObjectId(userId) }
        },
        { new: true });
    return updatedCard;
};

export const updateCard = async (_id: string | ObjectId, updates: UpdateCardRequestBody): Promise<Card> => {
    const updatedCard = await CardModel.findOneAndUpdate({ _id },
        { $set: updates },
        { new: true });
    return updatedCard;
};

export const addCardImages = async (_id: string | ObjectId, images: string[]): Promise<Card> => {
    const originalCard: Card = await CardModel.findOne({ _id });
    const cardImages = originalCard.images?.concat(images);
    const updatedCard = await CardModel.findOneAndUpdate({ _id },
        { images: cardImages },
        { new: true });
    return updatedCard;
};