import { modelOptions, prop, getModelForClass, plugin, defaultClasses, Ref, index } from '@typegoose/typegoose';
import autopopulate from 'mongoose-autopopulate';
import { Company } from './Company.model';
import { User } from './User.model';

export interface Card extends defaultClasses.Base { }
@modelOptions({ schemaOptions: { timestamps: true, strict: "throw", collection: "cards" } })
@plugin(autopopulate)
export class Card {
  @prop({ required: true })
  public title!: string;

  @prop({ required: false })
  public description?: string;

  @prop({ required: true, autopopulate: true, maxdepth: 1, ref: 'Company' })
  public company!: Ref<Company>;

  @prop({ required: true })
  public isActive!: boolean;

  @prop({ required: true, autopopulate: false, ref: 'User' })
  public createdBy!: Ref<User>;

  @prop({ required: true, default: Date.now })
  public createdAt!: Date;

  @prop({ required: true, default: Date.now })
  public updatedAt!: Date;
}

export const CardModel = getModelForClass(Card);
