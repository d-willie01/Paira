import { isDocument } from "@typegoose/typegoose";
import { Card } from "../models/Card.model";
import { User } from "../models/User.model";
import { CompanyResponse, transformCompany } from "./company.transformer";
import { transformUser, UserResponse } from "./user.transformer";

export interface CardResponse {
    _id: string;
    title: string;
    description?: string;
    company: CompanyResponse | string;
    createdBy?: UserResponse | string;
    createdAt?: Date;
    updatedAt?: Date
}

export const transformCard = (card: Card): CardResponse => ({
    _id: card._id.toString(),
    title: card.title,
    description: card.description,
    company: isDocument(card.company) ? transformCompany(card.company) : card.company!.toString(),
    createdBy: card.createdBy!.toString(),
    createdAt: card.createdAt,
    updatedAt: card.updatedAt
})