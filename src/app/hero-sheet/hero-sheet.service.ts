import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HeroSheetChangesDto } from 'app/hero-sheet/dtos/hero-sheet-changes.dto';
import { createSheetId } from 'app/hero-sheet/helper/create-hero-sheet-id.helper';
import { NonUpdatableProperties } from 'app/hero-sheet/maps/non-updatable-properties.map';
import { has, isNil, omit, set } from 'lodash';
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

    const idIsAlreadyInUse = await this.heroSheetModel
      .findOne({
        sheetId,
      })
      .exec();
    if (!isNil(idIsAlreadyInUse)) {
      sheetId = createSheetId();
    }

    createHeroSheetDto.sheetId = sheetId;
    const createdHeroSheet = new this.heroSheetModel(createHeroSheetDto);
    return createdHeroSheet.save();
  }

  async getHeroSheetById(heroSheetId: string) {
    if (isNil(heroSheetId)) {
      throw new BadRequestException('The HeroSheetId is empty');
    }

    const heroSheet = await this.heroSheetModel
      .findOne({
        sheetId: heroSheetId,
      })
      .exec();

    if (isNil(heroSheet)) {
      throw new NotFoundException('The HeroSheet was not found');
    }
    return heroSheet;
  }

  async duplicateBySheetId(heroSheetId: string) {
    const heroSheet = await this.getHeroSheetById(heroSheetId);
    const newSheetId = createSheetId();
    const newObject = omit(heroSheet.toObject(), '_id');
    newObject.sheetId = newSheetId;
    newObject.isDuplicatedFrom = heroSheetId;
    const duplicatedObject = new this.heroSheetModel(newObject);
    await duplicatedObject.save();
    return {
      newHeroSheetId: newSheetId,
    };
  }

  async updateHeroSheet({
    heroSheetId,
    propertyToUpdate,
    value,
  }: HeroSheetChangesDto) {
    const heroSheet = await this.getHeroSheetById(heroSheetId);
    const heroSheetObject = heroSheet.toObject();
    const baseProperty = propertyToUpdate[0];

    if (NonUpdatableProperties.includes(baseProperty)) {
      throw new BadRequestException(`You can't update that property.`);
    }
    const objectPath = propertyToUpdate.join('.');
    const isValidPathToObject = has(heroSheetObject, objectPath);
    if (!isValidPathToObject) {
      throw new BadRequestException('The property path is not set correctly.');
    }

    set(heroSheetObject, objectPath, value);

    try {
      await this.heroSheetModel
        .updateOne({ sheetId: heroSheet.sheetId }, heroSheetObject)
        .exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return 'The hero sheet has been updated.';
  }
}
