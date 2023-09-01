import { Prop } from '@nestjs/mongoose';
import { GenericValue } from 'app/commons/schemas/generic-value.schema';
import { PowerType } from 'app/hero-sheet/types/power.type';

export class Power {
  @Prop({ type: GenericValue })
  manna: PowerType;
  @Prop({ type: GenericValue })
  faith: PowerType;
  @Prop({ type: GenericValue })
  ki: PowerType;
  @Prop({ type: GenericValue })
  chaos: PowerType;
}
