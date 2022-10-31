import { modelOptions, prop, getModelForClass, plugin, defaultClasses, Ref, index } from '@typegoose/typegoose';
import autopopulate from 'mongoose-autopopulate';
import { Address, Location } from '../utils/location.util';
import { User } from './User.model';

export enum Industry {
  "entertainment",
  "food & dining",
  "non-profit",
  "retail",
  "sports & fitness"
}

export interface Company extends defaultClasses.Base { }
@modelOptions({ schemaOptions: { timestamps: true, strict: "throw", collection: "companies" }, options: { allowMixed: 0 } })
@index({ location: '2dsphere' })
@plugin(autopopulate)
export class Company {
  @prop({ required: true })
  public address!: Address;

  @prop({ required: false })
  public bio?: string;

  @prop({ required: false })
  public cardKeys?: string[];

  @prop({ required: true, autopopulate: false, ref: 'User' })
  public createdBy!: Ref<User>;

  @prop({ required: false, minlength: 4, maxlength: 4 })
  public founded?: string;

  @prop({ required: true })
  public industry!: Industry;

  @prop({ required: true })
  public location!: Location;

  @prop({ required: true })
  public name!: string;

  @prop({ required: true, default: Date.now })
  public createdAt!: Date;

  @prop({ required: true, default: Date.now })
  public updatedAt!: Date;
}

export const CompanyModel = getModelForClass(Company);
