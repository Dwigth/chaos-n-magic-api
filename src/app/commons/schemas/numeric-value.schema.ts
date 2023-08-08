import { Prop } from '@nestjs/mongoose';

export class NumericValue {
  @Prop()
  min: number;

  @Prop()
  max: number;

  @Prop()
  value: number;
}
