import { modelOptions, prop, getModelForClass, plugin, defaultClasses, Ref } from '@typegoose/typegoose';
import autopopulate from 'mongoose-autopopulate';
import { Company } from './Company.model';

export enum Role {
    "owner",
    "contributer"
}

export interface User extends defaultClasses.Base { }
@modelOptions({ schemaOptions: { timestamps: true, strict: "throw", collection: "users" } })
@plugin(autopopulate)
export class User {
    @prop({ required: false })
    public authProviderId?: string;

    @prop({ required: false, autopopulate: true, maxdepth: 1, ref: 'Company' })
    public company?: Ref<Company>;

    @prop({ required: true })
    public email!: string;

    @prop({ required: true })
    public firstName!: string;

    @prop({ required: true })
    public lastName!: string;

    @prop({ required: false })
    public role?: Role;

    @prop({ required: true, default: Date.now })
    public createdAt!: Date;

    @prop({ required: true, default: Date.now })
    public updatedAt!: Date;
}

export const UserModel = getModelForClass(User);