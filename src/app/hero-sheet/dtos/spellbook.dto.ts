import { ApiProperty } from '@nestjs/swagger';
import { ExamplesEnum } from 'app/hero-sheet/enums/examples.enum';
import { exampleSpellbooks } from 'app/hero-sheet/maps/example-spellbook.map';
import { Spellbook } from 'app/hero-sheet/types/spellbook.type';
import { IsArray } from 'class-validator';

export class SpellbookDto {
  @ApiProperty({
    description: 'Collection of Magic Schools',
  })
  @IsArray()
  magicSchools: string[];

  @ApiProperty({
    example: [exampleSpellbooks.get(ExamplesEnum.SwaggerExample)],
  })
  @IsArray()
  minorMagic: Spellbook[];

  @ApiProperty({
    example: [exampleSpellbooks.get(ExamplesEnum.SwaggerExample)],
  })
  @IsArray()
  initiateMagic: Spellbook[];

  @ApiProperty({
    example: [exampleSpellbooks.get(ExamplesEnum.SwaggerExample)],
  })
  @IsArray()
  professionalMagic: Spellbook[];

  @ApiProperty({
    example: [exampleSpellbooks.get(ExamplesEnum.SwaggerExample)],
  })
  @IsArray()
  masterMagic: Spellbook[];
}
