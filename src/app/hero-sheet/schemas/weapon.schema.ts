import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Attack } from 'app/hero-sheet/schemas/attack.schema';
import { AttackInfo } from 'app/hero-sheet/types/attack-info.type';
import { HydratedDocument } from 'mongoose';

export type WeaponDocument = HydratedDocument<Weapon>;

@Schema()
export class Weapon {
  @Prop()
  weaponName: string;
  @Prop({ type: Attack })
  hasAttack: AttackInfo;
}

export const WeaponSchema = SchemaFactory.createForClass(Weapon);
