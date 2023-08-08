import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Attributes } from 'app/hero-sheet/schemas/attributes.schema';
import { DamageStacks } from 'app/hero-sheet/schemas/damage-stacks.schema';
import { Defense } from 'app/hero-sheet/schemas/defense.schema';
import { Details } from 'app/hero-sheet/schemas/details.schema';
import { Energy } from 'app/hero-sheet/schemas/energy.schema';
import { Senses } from 'app/hero-sheet/schemas/senses.schema';
import { Speed } from 'app/hero-sheet/schemas/speed.schema';
import { Stance } from 'app/hero-sheet/schemas/stance.schema';
import { Talents } from 'app/hero-sheet/schemas/talents.schema';
import { Characteristic } from 'app/hero-sheet/types/characteristic.type';
import { Details as DetailsType } from 'app/hero-sheet/types/details.type';
import { Talent as TalentType } from 'app/hero-sheet/types/talent.type';
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

  @Prop({ type: DamageStacks })
  damageStacks: DamageStacks;

  @Prop({ type: Senses })
  senses: Senses;

  @Prop([
    raw({
      characteristicName: { type: String },
      characteristicBonus: { type: String },
    }),
  ])
  characteristics: Characteristic[];

  @Prop([String])
  languages: string[];

  @Prop({ type: Details })
  details: DetailsType;

  @Prop({ type: Talents })
  talents: TalentType[];
}

export const HeroBasicInfoSchema = SchemaFactory.createForClass(HeroBasicInfo);
