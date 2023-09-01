import { Prop } from '@nestjs/mongoose';
import { Attack } from 'app/hero-sheet/schemas/attack.schema';
import { AttackInfo } from 'app/hero-sheet/types/attack-info.type';

export class Weapon {
  @Prop()
  weaponName: string;
  @Prop({ type: Attack })
  hasAttack: AttackInfo;
}
