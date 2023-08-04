import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { NumericValue } from 'app/commons/schemas/numeric-value.schema';
import { HydratedDocument } from 'mongoose';

export type EnergyDocument = HydratedDocument<Energy>;

@Schema()
export class Energy extends NumericValue {
  @Prop()
  tempEnergy: number;
}

export const EnergySchema = SchemaFactory.createForClass(Energy);
