import { isDocument } from "@typegoose/typegoose";
import { Company } from "../models/Company.model";
import { User } from "../models/User.model";

export interface UserResponse {
    _id: string;
    firstName: string;
    lastName: string;
    company?: Company | string;
    authProviderId?: string;
    email?: string;
    createdAt?: Date;
    updatedAt?: Date
}

export const transformUser = (user: User) => ({
    _id: user._id.toString(),
    firstName: user.firstName,
    lastName: user.lastName,
    company: user.company?.toString(),
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
})