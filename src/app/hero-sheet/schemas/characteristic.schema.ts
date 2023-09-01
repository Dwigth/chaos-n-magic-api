import { Prop } from '@nestjs/mongoose';

export class Characteristic {
  @Prop()
  characteristicName: string;
  @Prop()
  characteristicBonus: string;
}
