import { UserModel, User, Search } from '../models/User.model';
import { NotFoundError } from '../utils/errors.util';
import { DeleteResult, ObjectId } from 'mongodb';

export interface CreateUserPayload {
    email: string;
}
export const createUser = async (createUserPayload: CreateUserPayload): Promise<User> => {
    const newUser = await UserModel.create(createUserPayload);
    return newUser;
};

export const getSavedSearch = async (userId: string, searchId: string): Promise<Search> => {
    const user = await UserModel.findOne({
        _id: userId,
    })

    const search = user.searches.find((search: Search) => {
        if (search._id == searchId) {
            return true;
        }
    });
    return search;
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

export const deleteUser = async (_id: string | ObjectId): Promise<DeleteResult> => {
    const deletedUser: DeleteResult = await UserModel.deleteOne({ _id }, { new: true });
    if (!deletedUser) throw new Error("Error deleting user " + _id);
    return deletedUser;
};

export const userAlreadyExists = async (email: string): Promise<boolean> => {
    const userDocumentCount = await UserModel.countDocuments({ email });
    return userDocumentCount > 0;
};

export const updateUser = async (_id: string | ObjectId, updates: User): Promise<User> => {
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

export const saveSearch = async (userId: string | ObjectId, search: Search): Promise<Search[]> => {
    const alreadySaved = await UserModel
        .findOne({
            _id: userId,
            "searches.industry": search.industry,
            "searches.cardKeys": search.cardKeys
        })
    if (!alreadySaved) {
        const updatedUser = await UserModel.findOneAndUpdate({ _id: userId },
            {
                $push: { searches: search }
            },
            { new: true });
        return updatedUser.searches;
    }
    return alreadySaved.searches
};

export const deleteSearch = async (userId: string | ObjectId, searchId: string | ObjectId): Promise<User> => {
    const updatedUser = await UserModel.findOneAndUpdate({ _id: userId },
        {
            $pull: { searches: { _id: new ObjectId(searchId) } }
        },
        { new: true });
    return updatedUser.searches;
};

export const updateUserAvatar = async (userId: string | ObjectId, avatar: string): Promise<User> => {
    const updatedUser = await UserModel.findOneAndUpdate({ _id: userId }, {
        avatar
    }, { new: true });
    return updatedUser;
}