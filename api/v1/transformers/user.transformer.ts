export interface UserResponse {
    _id: string;
    firstName: string;
    lastName: string;
    authProviderId?: string;
    email?: string;
    createdAt?: Date;
    updatedAt?: Date
}