import { ApiProperty } from "@nestjs/swagger";
import { NumericValuesDto } from "app/commons/dto/numeric-value.dto";

export class EnergyDto extends NumericValuesDto {
    @ApiProperty({
        example: 0,
        type: Number,
        description: 'Value of temporal energy'
    })
    tempEnergy: number;
}