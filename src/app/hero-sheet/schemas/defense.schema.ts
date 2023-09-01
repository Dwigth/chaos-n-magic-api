import { Prop } from '@nestjs/mongoose';
import { NumericValue } from 'app/commons/schemas/numeric-value.schema';

export class Defense extends NumericValue {
  @Prop()
  maxBonus: number;

  @Prop()
  bonus: number;
}
