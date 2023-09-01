import { Prop } from '@nestjs/mongoose';

export class Talents {
  @Prop()
  name: string;
  @Prop()
  effect: string;
}
