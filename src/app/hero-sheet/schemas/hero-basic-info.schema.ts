import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Defense } from 'app/hero-sheet/schemas/defense.schema';
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
}

export const HeroBasicInfoSchema = SchemaFactory.createForClass(HeroBasicInfo);
