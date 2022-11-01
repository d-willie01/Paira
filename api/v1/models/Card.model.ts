import { modelOptions, prop, getModelForClass, plugin, defaultClasses, Ref, Severity, mongoose } from '@typegoose/typegoose';
import autopopulate from 'mongoose-autopopulate';
import { Company } from './Company.model';
import { User } from './User.model';

export interface Card extends defaultClasses.Base { }
@modelOptions({ schemaOptions: { timestamps: true, strict: "throw", collection: "cards" }, options: { allowMixed: Severity.ALLOW } })
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

  @prop({ required: false, allowMixed: Severity.ALLOW, type: () => mongoose.Schema.Types.Mixed })
  public images?: string[];

  @prop({ required: false, autopopulate: false, maxdepth: 1, ref: 'User' })
  public likes?: Ref<User>[];

  @prop({ required: true, autopopulate: false, maxdepth: 1, ref: 'User' })
  public createdBy!: Ref<User>;

  @prop({ required: true, default: Date.now })
  public createdAt!: Date;

  @prop({ required: true, default: Date.now })
  public updatedAt!: Date;
}

export const CardModel = getModelForClass(Card);
