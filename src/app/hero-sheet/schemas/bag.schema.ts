import { Prop } from '@nestjs/mongoose';

export class Bag {
  @Prop()
  bagName: string;
  @Prop()
  isEquipped: boolean;
}
