import { Prop } from '@nestjs/mongoose';

export class GenericItemSchema {
  @Prop()
  name: string;
  @Prop()
  effect: string;
}
