import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { HeroBasicInfoDto } from './hero-basic-info.dto';

export class CreateHeroSheetDto {
  @ApiProperty({
    description: 'The unique identifier for the Sheet',
  })
  @IsOptional()
  sheetId: string;

  @ApiProperty({
    description: 'Hero information',
  })
  @ValidateNested()
  @Type(() => HeroBasicInfoDto)
  heroBasicInfo: HeroBasicInfoDto;
}
