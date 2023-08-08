import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DetailsDocument = HydratedDocument<Details>;

@Schema()
export class Details {
  @Prop()
  height: string;
  @Prop()
  weight: string;
  @Prop()
  backstory: string;
}

export const DetailsSchema = SchemaFactory.createForClass(Details);
