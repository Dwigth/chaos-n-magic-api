import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Sense } from 'app/hero-sheet/types/sense.type';
import { HydratedDocument } from 'mongoose';

export type SensesDocument = HydratedDocument<Senses>;
const SenseStructure = {
  value: { type: Number },
  max: { type: Number },
};

@Schema()
export class Senses {
  @Prop(raw(SenseStructure))
  hearing: Sense;

  @Prop(raw(SenseStructure))
  seeing: Sense;

  @Prop(raw(SenseStructure))
  nightVision: Sense;

  @Prop(raw(SenseStructure))
  pulse: Sense;

  @Prop(raw(SenseStructure))
  energy: Sense;
}

export const SensesSchema = SchemaFactory.createForClass(Senses);
