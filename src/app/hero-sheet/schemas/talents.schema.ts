import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TalentsDocument = HydratedDocument<Talents>;

@Schema()
export class Talents {
  @Prop()
  name: string;
  @Prop()
  effect: string;
}

export const TalentsSchema = SchemaFactory.createForClass(Talents);
