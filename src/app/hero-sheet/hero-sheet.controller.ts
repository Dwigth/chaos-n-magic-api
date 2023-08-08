import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateHeroSheetDto } from 'app/hero-sheet/dtos/create-hero-sheet.dto';
import { HeroSheetService } from './hero-sheet.service';

@ApiTags('Hero Sheet')
@Controller('hero-sheet')
export class HeroSheetController {
  constructor(private heroSheetService: HeroSheetService) {}

  @Post()
  async create(@Body() createHeroSheetDto: CreateHeroSheetDto) {
    return await this.heroSheetService.create(createHeroSheetDto);
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
}
