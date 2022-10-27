import { modelOptions, prop, getModelForClass, plugin, defaultClasses } from '@typegoose/typegoose';
import autopopulate from 'mongoose-autopopulate';

export interface Company extends defaultClasses.Base {}
@modelOptions({ schemaOptions: { timestamps: true, strict: "throw", collection: "companies" } })
@plugin(autopopulate)
export class Company {
  @prop({ required: true })
  public name!: string;

  @prop({ required: false })
  public cardKeys?: string[];
}

export const CompanyModel = getModelForClass(Company);
