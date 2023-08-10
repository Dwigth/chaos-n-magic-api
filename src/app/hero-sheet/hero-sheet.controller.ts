import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  Version,
} from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateHeroSheetDto } from 'app/hero-sheet/dtos/create-hero-sheet.dto';
import { DuplicateByIdDto } from 'app/hero-sheet/dtos/duplicate-by-id.dto';
import { HeroSheetChangesDto } from 'app/hero-sheet/dtos/hero-sheet-changes.dto';
import { HeroSheetService } from './hero-sheet.service';

@ApiTags('Hero Sheet')
@Controller('hero-sheet')
export class HeroSheetController {
  constructor(private heroSheetService: HeroSheetService) {}

  @Post()
  async create(@Body() createHeroSheetDto: CreateHeroSheetDto) {
    return await this.heroSheetService.create(createHeroSheetDto);
  }

  @Post('duplicate')
  async duplicateById(@Body() body: DuplicateByIdDto) {
    return await this.heroSheetService.duplicateBySheetId(body.heroSheetId);
  }

  @ApiQuery({ name: 'hero-sheet-id', example: 'CHAOS-N-MAGIC-rLsPo' })
  @ApiResponse({
    status: 404,
    description: 'The HeroSheet was not found',
  })
  @Get()
  async getHeroSheetById(@Query('hero-sheet-id') heroSheetId: string) {
    return await this.heroSheetService.getHeroSheetById(heroSheetId);
  }

  @Version('1')
  @Put()
  async updateHeroSheet(@Body() heroSheetChanges: HeroSheetChangesDto) {
    return await this.heroSheetService.updateHeroSheet(heroSheetChanges);
  }
}
