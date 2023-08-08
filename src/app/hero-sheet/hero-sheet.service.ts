import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createSheetId } from 'app/hero-sheet/helper/create-hero-sheet-id.helper';
import { isNil } from 'lodash';
import { Model } from 'mongoose';
import { CreateHeroSheetDto } from './dtos/create-hero-sheet.dto';
import { HeroSheet } from './schemas/hero-sheet.schema';

@Injectable()
export class HeroSheetService {
  constructor(
    @InjectModel(HeroSheet.name) private heroSheetModel: Model<HeroSheet>,
  ) {}

  async create(createHeroSheetDto: CreateHeroSheetDto) {
    // validate if hero-sheet id is already used
    let sheetId = createSheetId();

    const idIsAlreadyInUse = await this.getHeroSheetById(sheetId);
    if (!isNil(idIsAlreadyInUse)) {
      sheetId = createSheetId();
    }

    createHeroSheetDto.sheetId = sheetId;
    const createdHeroSheet = new this.heroSheetModel(createHeroSheetDto);
    return createdHeroSheet.save();
  }

  async getHeroSheetById(heroSheetId: string) {
    if (isNil(heroSheetId)) {
      return new BadRequestException('The HeroSheetId is empty');
    }

    return await this.heroSheetModel
      .findOne({
        sheetId: heroSheetId,
      })
      .exec();
  }
}
