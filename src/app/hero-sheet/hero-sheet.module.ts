import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroSheetController } from 'app/hero-sheet/hero-sheet.controller';
import { HeroSheet, HeroSheetSchema } from './schemas/hero-sheet.schema';
import { HeroSheetService } from './hero-sheet.service';
import { HeroBasicInfo, HeroBasicInfoSchema } from './schemas/hero-basic-info.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: HeroSheet.name, schema: HeroSheetSchema }, { name: HeroBasicInfo.name, schema: HeroBasicInfoSchema }])],
    controllers: [HeroSheetController],
    providers: [HeroSheetService],
})
export class HeroSheetModule { };