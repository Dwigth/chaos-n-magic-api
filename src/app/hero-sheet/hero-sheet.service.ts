import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HeroBasePath } from 'app/hero-sheet/constants/hero-base-path.const';
import { HeroSheetChangesDto } from 'app/hero-sheet/dtos/hero-sheet-changes.dto';
import { UpdateHeroSheetErrors } from 'app/hero-sheet/enums/update-hero-sheet-errors.enum';
import { createSheetId } from 'app/hero-sheet/helper/create-hero-sheet-id.helper';
import { createPasscodeString } from 'app/hero-sheet/helper/create-passcode.helper';
import { isNil, omit, set } from 'lodash';
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
    const sheetPasscode = Number(createPasscodeString());
    const heroSheet: HeroSheet = {
      ...createHeroSheetDto,
      sheetPasscode,
      sheetId,
    };

    const createdHeroSheet = new this.heroSheetModel(heroSheet);
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

  async getHeroAndVerifyPasscode(heroSheetId: string, sheetPasscode: number) {
    try {
      const heroSheet = await this.getHeroSheetById(heroSheetId);
      if (Number(heroSheet.sheetPasscode) !== Number(sheetPasscode)) {
        throw new Error('The sheet passcode is incorrect');
      }

      return heroSheet;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async duplicateBySheetId(heroSheetId: string) {
    const heroSheet = await this.getHeroSheetById(heroSheetId);
    const newSheetId = createSheetId();
    const newObject = omit(heroSheet.toObject(), '_id');
    newObject.sheetId = newSheetId;
    newObject.isDuplicatedFrom = heroSheetId;
    newObject.sheetPasscode = Number(createPasscodeString());
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
    try {
      const heroSheet = await this.getHeroSheetById(heroSheetId);
      const heroSheetObject = heroSheet.toObject();

      if (propertyToUpdate.length === 0) {
        throw new Error(UpdateHeroSheetErrors.InvalidPropertyPath);
      }

      const propertyWithBasePath = [HeroBasePath, ...propertyToUpdate];

      const objectPath = propertyWithBasePath.join('.');

      set(heroSheetObject, objectPath, value);

      await this.heroSheetModel
        .updateOne({ sheetId: heroSheet.sheetId }, heroSheetObject)
        .exec();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }

    return 'The hero sheet has been updated.';
  }
}
