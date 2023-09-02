import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class HeroSheetChangesDto {
  @ApiProperty({
    description: 'The hero sheet id which we are going to update',
  })
  heroSheetId: string;

  @ApiProperty({
    example: ['characteristics', '1'],
    examples: [
      ['characterName'],
      ['characteristics[0]', 'characteristicName'],
      ['characteristics', '0', 'characteristicName'],
    ],
    description: 'Array of strings with the path of property to update',
  })
  @IsArray()
  propertyToUpdate: string[];

  @ApiProperty({
    example: {
      characteristicName: 'Gambler',
      characteristicBonus: '+2',
    },
    description: 'The value of the property to update',
  })
  value: string | number | Object;
}
