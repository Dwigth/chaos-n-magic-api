import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class HeroSheetChangesDto {
  @ApiProperty({
    description: 'The hero sheet id which we are going to update',
  })
  heroSheetId: string;

  @ApiProperty({
    examples: [
      ['heroBasicInfo', 'characterName'],
      ['heroBasicInfo', 'characteristics[0]', 'characteristicName'],
      ['heroBasicInfo', 'characteristics', '0', 'characteristicName'],
    ],
    description: 'Array of strings with the path of property to update',
  })
  @IsArray()
  propertyToUpdate: string[];

  @ApiProperty({
    description: 'The value of the property to update',
  })
  value: string | number | Object;
}
