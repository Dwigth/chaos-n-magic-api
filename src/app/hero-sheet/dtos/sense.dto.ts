import { ApiProperty } from "@nestjs/swagger";
import { Sense } from "app/hero-sheet/types/sense.type";

export class SenseDto {

    @ApiProperty({
        example: {
            value: 0,
            max: 10
        },
        description: 'Hearing values'
    })
    hearing: Sense;

    @ApiProperty({
        example: {
            value: 0,
            max: 10
        },
        description: 'Seeing values'
    })
    seeing: Sense;

    @ApiProperty({
        example: {
            value: 0,
            max: 10
        },
        description: 'NightVision values'
    })
    nightVision: Sense;

    @ApiProperty({
        example: {
            value: 0,
            max: 10
        },
        description: 'Pulse values'
    })
    pulse: Sense;

    @ApiProperty({
        example: {
            value: 0,
            max: 10
        },
        description: 'Energy values'
    })
    energy: Sense;
}