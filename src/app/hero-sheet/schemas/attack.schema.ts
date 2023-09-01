import { Prop } from '@nestjs/mongoose';

export class Attack {
  @Prop()
  name: string;
  @Prop()
  damage: string;
  @Prop()
  damageType: string;
  @Prop()
  energy: number;
}
