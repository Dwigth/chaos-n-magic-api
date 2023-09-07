import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Action } from 'app/hero-sheet/schemas/action.schema';
import { Attributes } from 'app/hero-sheet/schemas/attributes.schema';
import { Characteristic } from 'app/hero-sheet/schemas/characteristic.schema';
import { DamageStacks } from 'app/hero-sheet/schemas/damage-stacks.schema';
import { Defense } from 'app/hero-sheet/schemas/defense.schema';
import { Details } from 'app/hero-sheet/schemas/details.schema';
import { Energy } from 'app/hero-sheet/schemas/energy.schema';
import { Equipment } from 'app/hero-sheet/schemas/equipment.schema';
import { Inventory } from 'app/hero-sheet/schemas/inventory.schema';
import { Power } from 'app/hero-sheet/schemas/power.schema';
import { Senses } from 'app/hero-sheet/schemas/senses.schema';
import { Speed } from 'app/hero-sheet/schemas/speed.schema';
import { Spellbook } from 'app/hero-sheet/schemas/spellbook.schema';
import { Stance } from 'app/hero-sheet/schemas/stance.schema';
import { Talents } from 'app/hero-sheet/schemas/talents.schema';
import { Details as DetailsType } from 'app/hero-sheet/types/details.type';
import { Talent as TalentType } from 'app/hero-sheet/types/talent.type';
import { HydratedDocument } from 'mongoose';

export type HeroBasicInfoDocument = HydratedDocument<HeroBasicInfo>;

@Schema()
export class HeroBasicInfo {
  @Prop()
  characterName: string;

  @Prop()
  specie: string;

  @Prop()
  profession: string;

  @Prop()
  diet: string;

  @Prop()
  characterLevel: string;

  @Prop()
  description: string;

  @Prop()
  appearance: string;

  @Prop()
  characteristic: string;

  @Prop()
  milestones: { [milestoneName: string]: boolean }[];

  @Prop()
  characterKnownLanguages: string;

  @Prop([String])
  notes: string[];

  @Prop([Action])
  actions: Action[];

  @Prop()
  characteristicsText: string;

  @Prop()
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

  @Prop([Characteristic])
  characteristics: Characteristic[];

  @Prop([String])
  languages: string[];

  @Prop({ type: Details })
  details: DetailsType;

  @Prop([{ type: Talents }])
  talents: TalentType[];

  @Prop({ type: Equipment })
  equipment: Equipment;

  @Prop({ type: Inventory })
  inventory: Inventory;

  @Prop({ type: Spellbook })
  spellbook: Spellbook;

  @Prop({ type: Power })
  powers: Power;
}

export const HeroBasicInfoSchema = SchemaFactory.createForClass(HeroBasicInfo);
