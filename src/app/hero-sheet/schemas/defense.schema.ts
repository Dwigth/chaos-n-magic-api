import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { NumericValue } from 'app/commons/schemas/numeric-value.schema';
import { HydratedDocument } from 'mongoose';

export type DefenseDocument = HydratedDocument<Defense>;

@Schema()
export class Defense extends NumericValue {
  @Prop()
  maxBonus: number;

  @Prop()
  bonus: number;
}

export const DefenseSchema = SchemaFactory.createForClass(Defense);
