import { ApiProperty } from "@nestjs/swagger";
import { DefenseDto } from "./defense.dto";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { StanceDto } from "./stance.dto";
import { EnergyDto } from "./energy.dto";

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
}