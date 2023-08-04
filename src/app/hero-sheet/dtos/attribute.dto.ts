import { ApiProperty } from "@nestjs/swagger";
import { Attribute } from "app/hero-sheet/types/attribute.type"

export class AttributeDto {
    @ApiProperty({
        example: {
            value: 3
        },
        description: 'Personality current value'
    })
    personality: Attribute;

    @ApiProperty({
        example: {
            value: 3
        },
        description: 'Combat current value'
    })
    combat: Attribute;

    @ApiProperty({
        example: {
            value: 3
        },
        description: 'Intellect current value'
    })
    intellect: Attribute;

    @ApiProperty({
        example: {
            value: 3
        },
        description: 'Fortitude current value'
    })
    fortitude: Attribute;

    @ApiProperty({
        example: {
            value: 3
        },
        description: 'Agility current value'
    })
    agility: Attribute;

    @ApiProperty({
        example: {
            value: 3
        },
        description: 'Senses current value'
    })
    senses: Attribute;

    @ApiProperty({
        example: {
            value: 3
        },
        description: 'Mind current value'
    })
    mind: Attribute;

}