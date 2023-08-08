import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DetailsDocument = HydratedDocument<Talents>;

@Schema()
export class Talents {
  @Prop()
  name: string;
  @Prop()
  effect: string;
}

export const DetailsSchema = SchemaFactory.createForClass(Talents);
