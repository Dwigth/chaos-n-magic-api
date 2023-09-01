import { Prop, raw } from '@nestjs/mongoose';
import { Attribute as AttributeType } from 'app/hero-sheet/types/attribute.type';

export class Attributes {
  @Prop(
    raw({
      value: { type: Number },
    }),
  )
  personality: AttributeType;

  @Prop(
    raw({
      value: { type: Number },
    }),
  )
  combat: AttributeType;

  @Prop(
    raw({
      value: { type: Number },
    }),
  )
  intellect: AttributeType;

  @Prop(
    raw({
      value: { type: Number },
    }),
  )
  fortitude: AttributeType;

  @Prop(
    raw({
      value: { type: Number },
    }),
  )
  agility: AttributeType;

  @Prop(
    raw({
      value: { type: Number },
    }),
  )
  senses: AttributeType;

  @Prop(
    raw({
      value: { type: Number },
    }),
  )
  mind: AttributeType;
}
