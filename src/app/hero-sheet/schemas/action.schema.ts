import { Prop } from '@nestjs/mongoose';

export class Action {
  @Prop()
  name: string;

  @Prop()
  formula: string;

  @Prop()
  damageType: string;

  @Prop()
  energyCost: number;

  @Prop()
  showDescription: boolean;

  @Prop()
  description: string;
}
