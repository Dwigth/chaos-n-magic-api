import { Prop } from '@nestjs/mongoose';
import { Attack } from 'app/hero-sheet/schemas/attack.schema';

export class SpellbookMagic {
  @Prop()
  name: string;
  @Prop()
  cost: number;
  @Prop()
  time: number;
  @Prop()
  range: string;
  @Prop()
  target: string;
  @Prop()
  duration: string;
  @Prop()
  channeling: number;
  @Prop()
  ad: string;
  @Prop()
  damage: string;
  @Prop()
  description: string;
  @Prop({ type: Attack })
  hasAttack: Attack;
}
