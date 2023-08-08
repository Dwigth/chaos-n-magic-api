import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { DamageStacks as DamageStacksType } from 'app/hero-sheet/types/damage-stacks.type';
import { HydratedDocument } from 'mongoose';

export type DamageStacksDocument = HydratedDocument<DamageStacks>;
const DamageStackStructure = {
  value: { type: Number },
  max: { type: Number },
};

@Schema()
export class DamageStacks {
  @Prop(raw(DamageStackStructure))
  bleeding: DamageStacksType;

  @Prop(raw(DamageStackStructure))
  toxic: DamageStacksType;

  @Prop(raw(DamageStackStructure))
  psychic: DamageStacksType;
}

export const DamageStacksSchema = SchemaFactory.createForClass(DamageStacks);
