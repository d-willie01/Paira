import { isDocument } from "@typegoose/typegoose";
import { Card } from "../models/Card.model";
import { CompanyResponse, transformCompany } from "./company.transformer";
import { UserResponse } from "./user.transformer";

export interface CardResponse {
    _id: string;
    company: CompanyResponse | string;
    createdBy?: UserResponse | string;
    createdAt?: Date;
    description?: string;
    isActive: boolean;
    title: string;
    updatedAt?: Date
}

export const transformCard = (card: Card): CardResponse => ({
    _id: card._id.toString(),
    company: isDocument(card.company) ? transformCompany(card.company) : card.company!.toString(),
    createdBy: card.createdBy!.toString(),
    createdAt: card.createdAt,
    description: card.description,
    isActive: card.isActive,
    title: card.title,
    updatedAt: card.updatedAt
})