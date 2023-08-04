import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateHeroSheetDto } from 'app/hero-sheet/dtos/create-hero-sheet.dto';
import { HeroSheetService } from './hero-sheet.service';

@Controller('hero-sheet')
export class HeroSheetController {
    constructor(private heroSheetService: HeroSheetService) { }

    @Post()
    async create(@Body() createHeroSheetDto: CreateHeroSheetDto) {
        return await this.heroSheetService.create(createHeroSheetDto);
    }
}