import { mongoose } from '@typegoose/typegoose';
import { UserModel, User } from '../models/User.model';
import { NotFoundError } from '../utils/errors.util';
import { DeleteResult } from 'mongodb';

export interface CreateUserPayload {
    email: string;
}
export const createUser = async (createUserPayload: CreateUserPayload): Promise<User> => {
    const newUser = await UserModel.create(createUserPayload);
    return newUser;
};

export const getUserByEmailAddress = async (email: string): Promise<User | null> => {
    const user = await UserModel.findOne({ email });
    return user;
};

export const getUserByAuthProviderId = async (authProviderId: string): Promise<User> => {
    const user = await UserModel.findOne({ authProviderId });
    if (!user) throw new NotFoundError("user not found by provider id " + authProviderId);
    return user;
};

export const deleteUser = async (_id: string | mongoose.Types.ObjectId): Promise<DeleteResult> => {
    const deletedUser: DeleteResult = await UserModel.deleteOne({ _id }, { new: true });
    if (!deletedUser) throw new Error("Error deleting user " + _id);
    return deletedUser;
};

export const userAlreadyExists = async (email: string): Promise<boolean> => {
    const userDocumentCount = await UserModel.count({ email });
    return userDocumentCount > 0;
};

export const updateUser = async (_id: string | mongoose.Types.ObjectId, updates: User): Promise<User> => {
    const updatedUser = await UserModel.findOneAndUpdate({ _id }, {
        firstName: updates.firstName,
        lastName: updates.lastName,
        email: updates.email,
        company: updates.company,
        role: updates.role
    }, { new: true });
    if (!updatedUser) throw new Error("Error updating user " + _id);
    return updatedUser;
};