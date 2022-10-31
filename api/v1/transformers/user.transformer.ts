import { isDocument } from "@typegoose/typegoose";
import { Company } from "../models/Company.model";
import { Role, User } from "../models/User.model";

export interface UserResponse {
    _id: string;
    firstName: string;
    lastName: string;
    company?: Company | string;
    authProviderId?: string;
    email?: string;
    role?: string;
    createdAt?: Date;
    updatedAt?: Date
}

export const transformUser = (user: User): UserResponse => ({
    _id: user._id.toString(),
    firstName: user.firstName,
    lastName: user.lastName,
    company: user.company?.toString(),
    role: typeof user.role !== 'undefined' ? Role[user.role] : undefined,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
})

export const transformSelf = (user: User): UserResponse => ({
    _id: user._id.toString(),
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    company: isDocument(user.company) ? user.company : user.company?.toString(),
    role: typeof user.role !== 'undefined' ? Role[user.role] : undefined,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
})