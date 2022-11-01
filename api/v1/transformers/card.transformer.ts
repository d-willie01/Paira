import { isDocument } from "@typegoose/typegoose";
import { Card } from "../models/Card.model";
import { CompanyResponse, transformCompany } from "./company.transformer";
import { UserResponse } from "./user.transformer";
import { GetCardsAggregateResponse } from "../services/Card.service";
import { Industry } from "../models/Company.model";
import { User } from "../models/User.model";

export interface CardResponse {
    _id: string;
    company: CompanyResponse | string;
    createdBy?: UserResponse | string;
    createdAt?: Date;
    description?: string;
    isActive: boolean;
    images: string[];
    title: string;
    likes: User[];
    updatedAt?: Date
}

export const transformCard = (card: Card): CardResponse => ({
    _id: card._id.toString(),
    company: isDocument(card.company) ? transformCompany(card.company) : card.company,
    createdBy: card.createdBy!.toString(),
    createdAt: card.createdAt,
    description: card.description,
    isActive: card.isActive,
    images: card.images ?? [],
    title: card.title,
    likes: card.likes ?? [],
    updatedAt: card.updatedAt
})

export interface GetCardsByQueryResponse {
    _id: string;
    title: string;
    description?: string;
    isActive: boolean;
    images: string[];
    likes: User[];
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
    company: {
        _id: string;
        name: string;
        founded: string;
        bio: string;
        industry: string;
        cardKeys: string[];
        distance: number;
        coordinates: {
            lat: number;
            long: number;
        }
    } | string;
}
export const transformCardSearchResults = (searchResult: GetCardsAggregateResponse): GetCardsByQueryResponse => {
    const { card } = searchResult;

    return {
        _id: card._id.toString(),
        title: card.title,
        description: card.description,
        isActive: card.isActive,
        images: card.images ?? [],
        likes: card.likes ?? [],
        createdBy: card.createdBy!.toString(),
        createdAt: card.createdAt,
        updatedAt: card.updatedAt,
        company: {
            _id: searchResult._id.toString(),
            name: searchResult.name,
            founded: searchResult.founded ?? "",
            bio: searchResult.bio ?? "",
            industry: Industry[searchResult.industry],
            cardKeys: searchResult.cardKeys,
            distance: searchResult.distance,
            coordinates: {
                lat: searchResult.location.coordinates[1],
                long: searchResult.location.coordinates[0]
            }
        }
    }
}