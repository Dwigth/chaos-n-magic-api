import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type HeroBasicInfoDocument = HydratedDocument<HeroBasicInfo>;

@Schema()
export class HeroBasicInfo {
    @Prop()
    characterName: string;
}

export const HeroBasicInfoSchema = SchemaFactory.createForClass(HeroBasicInfo);