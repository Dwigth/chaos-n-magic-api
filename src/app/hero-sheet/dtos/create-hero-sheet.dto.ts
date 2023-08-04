import { ApiProperty } from '@nestjs/swagger';
import { HeroBasicInfoDto } from './hero-basic-info.dto';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateHeroSheetDto {
    @ApiProperty({
        example: '010258',
        description: 'Passcode to access the Hero Sheet',
        type: Number
    })
    sheetPasscode: number;

    @ApiProperty({
        example: ['This is my note', 'This is my another note'],
        description: 'Any note that may came up'
    })
    notes: string[];
    @ApiProperty({
        description: 'Hero information',
    })
    @ValidateNested()
    @Type(() => HeroBasicInfoDto)
    heroBasicInfo: HeroBasicInfoDto;
}