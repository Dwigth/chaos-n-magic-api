import { Prop } from '@nestjs/mongoose';
import { NumericValue } from 'app/commons/schemas/numeric-value.schema';

export class Stance extends NumericValue {
  @Prop()
  tempStance: number;
}
