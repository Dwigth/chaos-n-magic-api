import { Prop, raw } from '@nestjs/mongoose';
import { DamageStacks as DamageStacksType } from 'app/hero-sheet/types/damage-stacks.type';

const DamageStackStructure = {
  value: { type: Number },
  max: { type: Number },
};

export class DamageStacks {
  @Prop(raw(DamageStackStructure))
  bleeding: DamageStacksType;

  @Prop(raw(DamageStackStructure))
  toxic: DamageStacksType;

  @Prop(raw(DamageStackStructure))
  psychic: DamageStacksType;
}
