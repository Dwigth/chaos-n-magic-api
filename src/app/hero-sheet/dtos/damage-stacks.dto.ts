import { ApiProperty } from "@nestjs/swagger";
import { DamageStacks } from "app/hero-sheet/types/damage-stacks.type"

export class DamageStacksDto {
    @ApiProperty({
        example: {
            value: 4,
            max: 10
        }
    })
    bleeding: DamageStacks;

    @ApiProperty({
        example: {
            value: 4,
            max: 10
        }
    })
    toxic: DamageStacks;
    
    @ApiProperty({
        example: {
            value: 4,
            max: 10
        }
    })
    psychic: DamageStacks;
}