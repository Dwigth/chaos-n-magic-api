import { ApiProperty } from "@nestjs/swagger";
import { NumericValuesDto } from "app/commons/dto/numeric-value.dto";

export class DefenseDto extends NumericValuesDto {

    @ApiProperty({
        example: 0,
        type: Number,
        description: 'Maximum value for bonus'
    })
    maxBonus: number;

    @ApiProperty({
        example: 0,
        type: Number,
        description: 'Current value for bonus'
    })
    bonus: number;
}