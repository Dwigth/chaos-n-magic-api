import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SpeedDto } from "app/hero-sheet/dtos/speed.dto";
import { DefenseDto } from "app/hero-sheet/dtos/defense.dto";
import { EnergyDto } from "app/hero-sheet/dtos/energy.dto";
import { StanceDto } from "app/hero-sheet/dtos/stance.dto";
import { AttributeDto } from "app/hero-sheet/dtos/attribute.dto";
import { DamageStacksDto } from "app/hero-sheet/dtos/damage-stacks.dto";

export class HeroBasicInfoDto {

    @ApiProperty({
        example: 'Ron The Darf',
        description: 'The character name'
    })
    characterName: string;

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
}