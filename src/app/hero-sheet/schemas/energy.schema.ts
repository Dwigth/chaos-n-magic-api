import { Prop } from '@nestjs/mongoose';
import { NumericValue } from 'app/commons/schemas/numeric-value.schema';

export class Energy extends NumericValue {
  @Prop()
  tempEnergy: number;
}
