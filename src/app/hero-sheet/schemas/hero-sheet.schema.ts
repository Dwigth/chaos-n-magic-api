import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HeroBasicInfo } from 'app/hero-sheet/schemas/hero-basic-info.schema';
import { HydratedDocument } from 'mongoose';

export type HeroSheetDocument = HydratedDocument<HeroSheet>;

@Schema()
export class HeroSheet {
  @Prop()
  sheetId: string;

  @Prop()
  sheetPasscode: number;

  @Prop({ ref: 'HeroBasicInfo' })
  heroBasicInfo: HeroBasicInfo;

  @Prop()
  isDuplicatedFrom?: string;
}

export const HeroSheetSchema = SchemaFactory.createForClass(HeroSheet);
