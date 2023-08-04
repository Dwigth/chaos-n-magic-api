import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HeroSheet } from './schemas/hero-sheet.schema';
import { Model } from 'mongoose';
import { CreateHeroSheetDto } from './dtos/create-hero-sheet.dto';

@Injectable()
export class HeroSheetService {
    constructor(@InjectModel(HeroSheet.name) private heroSheetModel: Model<HeroSheet>) { }

    async create(createHeroSheetDto: CreateHeroSheetDto) {
        // validate if hero-sheet id is already used
        const createdHeroSheet = new this.heroSheetModel(createHeroSheetDto);
        return createdHeroSheet.save();
    }

    async getHeroSheetById() { }
}