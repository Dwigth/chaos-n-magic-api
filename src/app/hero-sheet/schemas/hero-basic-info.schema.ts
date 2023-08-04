import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Attributes } from 'app/hero-sheet/schemas/attributes.schema';
import { Defense } from 'app/hero-sheet/schemas/defense.schema';
import { Energy } from 'app/hero-sheet/schemas/energy.schema';
import { Speed } from 'app/hero-sheet/schemas/speed.schema';
import { Stance } from 'app/hero-sheet/schemas/stance.schema';
import { HydratedDocument } from 'mongoose';

export type HeroBasicInfoDocument = HydratedDocument<HeroBasicInfo>;

@Schema()
export class HeroBasicInfo {
  @Prop()
  characterName: string;

  @Prop({ type: Defense })
  defense: Defense;

  @Prop({ type: Stance })
  stance: Stance;

  @Prop({ type: Energy })
  energy: Energy;

  @Prop({ type: Speed })
  speed: Speed;

  @Prop({ type: Attributes })
  attributes: Attributes;
}

export const HeroBasicInfoSchema = SchemaFactory.createForClass(HeroBasicInfo);
