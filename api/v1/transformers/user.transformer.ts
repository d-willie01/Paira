import { isDocument } from "@typegoose/typegoose";
import { Company } from "../models/Company.model";
import { Role, Search, User } from "../models/User.model";

export interface UserResponse {
    _id: string;
    avatar?: string;
    firstName: string;
    lastName: string;
    company?: Company | string;
    authProviderId?: string;
    email?: string;
    role?: string;
    searches?: Search[]
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
    avatar: user.avatar,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    company: isDocument(user.company) ? user.company : user.company,
    role: typeof user.role !== 'undefined' ? Role[user.role] : undefined,
    searches: user.searches,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
})