import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Speed as SpeedType } from 'app/hero-sheet/types/speed.type';
import { HydratedDocument } from 'mongoose';

export type SpeedDocument = HydratedDocument<Speed>;

@Schema()
export class Speed {
  @Prop(
    raw({
      value: { type: Number },
    }),
  )
  climbingSpeed: SpeedType;

  @Prop(
    raw({
      value: { type: Number },
    }),
  )
  walkingSpeed: SpeedType;

  @Prop(
    raw({
      value: { type: Number },
    }),
  )
  swimmingSpeed: SpeedType;

  @Prop(
    raw({
      value: { type: Number },
    }),
  )
  flyingSpeed: SpeedType;

  @Prop(
    raw({
      value: { type: Number },
    }),
  )
  diggingSpeed: SpeedType;
}

export const SpeedSchema = SchemaFactory.createForClass(Speed);
