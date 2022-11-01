import { modelOptions, prop, getModelForClass, plugin, defaultClasses, Ref, Severity, mongoose } from '@typegoose/typegoose';
import autopopulate from 'mongoose-autopopulate';
import { Company } from './Company.model';
import { ObjectId } from 'mongodb';

export enum Role {
    "owner",
    "contributer"
}

export class Search {
    @prop({ required: true })
    public _id: ObjectId;

    @prop({ required: true })
    public industry: string;

    @prop({ required: false })
    public cardKeys?: string[];
}

export interface User extends defaultClasses.Base { }
@modelOptions({ schemaOptions: { timestamps: true, strict: "throw", collection: "users" }, options: { allowMixed: Severity.ALLOW } })
@plugin(autopopulate)
export class User {
    @prop({ required: false })
    public avatar?: string;

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

    @prop({ required: false, allowMixed: Severity.ALLOW, type: () => mongoose.Schema.Types.Mixed })
    public searches?: Search[];

    @prop({ required: true, default: Date.now })
    public createdAt!: Date;

    @prop({ required: true, default: Date.now })
    public updatedAt!: Date;
}

export const UserModel = getModelForClass(User);