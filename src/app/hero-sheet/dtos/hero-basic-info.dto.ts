import { ApiProperty } from '@nestjs/swagger';
import { AttributeDto } from 'app/hero-sheet/dtos/attribute.dto';
import { DamageStacksDto } from 'app/hero-sheet/dtos/damage-stacks.dto';
import { DefenseDto } from 'app/hero-sheet/dtos/defense.dto';
import { EnergyDto } from 'app/hero-sheet/dtos/energy.dto';
import { EquipmentDto } from 'app/hero-sheet/dtos/equipment.dto';
import { InventoryDto } from 'app/hero-sheet/dtos/inventory.dto';
import { PowerDto } from 'app/hero-sheet/dtos/power.dto';
import { SenseDto } from 'app/hero-sheet/dtos/sense.dto';
import { SpeedDto } from 'app/hero-sheet/dtos/speed.dto';
import { SpellbookDto } from 'app/hero-sheet/dtos/spellbook.dto';
import { StanceDto } from 'app/hero-sheet/dtos/stance.dto';
import { exampleTalents } from 'app/hero-sheet/maps/example-talents.maps';
import { Characteristic } from 'app/hero-sheet/types/characteristic.type';
import { HeroSheetDetails } from 'app/hero-sheet/types/hero-sheet-details.type';
import { Talent } from 'app/hero-sheet/types/talent.type';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';

export class HeroBasicInfoDto {
  @ApiProperty({
    example: 'Ron The Darf',
    description: 'The character name',
  })
  characterName: string;

  @ApiProperty({
    example: ['This is my note', 'This is my another note'],
    description: 'Any note that may came up',
  })
  notes: string[];

  @ApiProperty({
    example: 'Rabbir',
    description: 'The character specie',
  })
  specie: string;

  @ApiProperty({
    example: 'Vagabond (Street)',
    description: 'The character profession',
  })
  profession: string;

  @ApiProperty({
    example: 'herbivorous',
    description: 'The character diet',
  })
  diet: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => DefenseDto)
  defense: DefenseDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => StanceDto)
  stance: StanceDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => EnergyDto)
  energy: EnergyDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => SpeedDto)
  speed: SpeedDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => AttributeDto)
  attributes: AttributeDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => DamageStacksDto)
  damageStacks: DamageStacksDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => SenseDto)
  senses: SenseDto;

  @ApiProperty({
    example: [
      {
        characteristicName: 'Kissing',
        characteristicBonus: '+1',
      },
    ],
    description: 'Characteristic details',
  })
  @IsArray()
  characteristics: Characteristic[];

  @ApiProperty({
    example: ['es', 'en'],
    description: 'Languages for the hero sheet',
  })
  @IsArray()
  languages: string[];

  @ApiProperty({
    example: {
      height: '160cm',
      weight: '15kg',
      backstory: 'This hero was born in...',
    },
    description: 'Details of the hero',
  })
  details: HeroSheetDetails;

  @ApiProperty({
    example: [exampleTalents.get('SwaggerExample')],
  })
  @IsArray()
  talents: Talent[];

  @ApiProperty()
  @ValidateNested()
  @Type(() => EquipmentDto)
  equipment: EquipmentDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => InventoryDto)
  inventory: InventoryDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => SpellbookDto)
  spellbook: SpellbookDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => PowerDto)
  powers: PowerDto;
}
