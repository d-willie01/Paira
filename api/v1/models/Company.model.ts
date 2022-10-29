import { modelOptions, prop, getModelForClass, plugin, defaultClasses, Ref, index } from '@typegoose/typegoose';
import autopopulate from 'mongoose-autopopulate';
import { Address, Coordinates } from '../utils/location.util';
import { User } from './User.model';

export enum Industry {
  "art & music",
  entertainment,
  food,
  places,
  "sports & fitness"
}

export interface Company extends defaultClasses.Base { }
@modelOptions({ schemaOptions: { timestamps: true, strict: "throw", collection: "companies" } })
@index({ name: 1, 'address.zipCode': 1, 'address.state': 1 }, { unique: true })
@index({ location: '2dsphere' })
@plugin(autopopulate)
export class Company {
  @prop({ required: true })
  public address!: Address;

  @prop({ required: false })
  public cardKeys?: string[];

  @prop({ required: true })
  public coordinates!: Coordinates;

  @prop({ required: true, autopopulate: true, ref: 'User' })
  public createdBy!: Ref<User>;

  @prop({ required: true })
  public industry!: Industry;

  @prop({ required: true })
  public name!: string;

  @prop({ required: true, default: Date.now })
  public createdAt!: Date;

  @prop({ required: true, default: Date.now })
  public updatedAt!: Date;
}

export const CompanyModel = getModelForClass(Company);
