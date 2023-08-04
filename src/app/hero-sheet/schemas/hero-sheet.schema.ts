import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { HeroBasicInfo } from "app/hero-sheet/schemas/hero-basic-info.schema";

export type HeroSheetDocument = HydratedDocument<HeroSheet>;

@Schema()
export class HeroSheet {
    @Prop()
    sheetId: number;

    @Prop()
    sheetPasscode: number;

    @Prop({ ref: 'HeroBasicInfo' })
    heroBasicInfo: HeroBasicInfo;

    @Prop([String])
    notes: string[];
}

export const HeroSheetSchema = SchemaFactory.createForClass(HeroSheet);