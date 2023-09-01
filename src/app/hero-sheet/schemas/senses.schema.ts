import { Prop, raw } from '@nestjs/mongoose';
import { Sense } from 'app/hero-sheet/types/sense.type';

const SenseStructure = {
  value: { type: Number },
  max: { type: Number },
};

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
