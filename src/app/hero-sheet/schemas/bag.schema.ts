import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BagDocument = HydratedDocument<Bag>;

@Schema()
export class Bag {
  @Prop()
  bagName: string;
  @Prop()
  isEquipped: boolean;
}

export const BagSchema = SchemaFactory.createForClass(Bag);
