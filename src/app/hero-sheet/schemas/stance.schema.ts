import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { NumericValue } from 'app/commons/schemas/numeric-value.schema';
import { HydratedDocument } from 'mongoose';

export type StanceDocument = HydratedDocument<Stance>;

@Schema()
export class Stance extends NumericValue {
  @Prop()
  tempStance: number;
}

export const StanceSchema = SchemaFactory.createForClass(Stance);
