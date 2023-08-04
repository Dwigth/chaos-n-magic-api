import { ApiProperty } from "@nestjs/swagger";
import { Speed } from "app/hero-sheet/types/speed.type";

export class SpeedDto {
    @ApiProperty({
        example: {
            value: 2
        },
        description: 'Climbing Speed'
    })
    climbingSpeed: Speed;

    @ApiProperty({
        example: {
            value: 2
        },
        description: 'Walking Speed'
    })
    walkingSpeed: Speed;

    @ApiProperty({
        example: {
            value: 2
        },
        description: 'Swimming Speed'
    })
    swimmingSpeed: Speed;

    @ApiProperty({
        example: {
            value: 2
        },
        description: 'Flying Speed'
    })
    flyingSpeed: Speed;

    @ApiProperty({
        example: {
            value: 2
        },
        description: 'Digging Speed'
    })
    diggingSpeed: Speed;
}