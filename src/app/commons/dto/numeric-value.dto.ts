import { ApiProperty } from "@nestjs/swagger";
import { NumericValues } from "app/commons/types/numeric-values.type";

export class NumericValuesDto {
    @ApiProperty({
        example: {
            min: 1,
            max: 10,
            value: 4,
        },
        description: 'Values for Max, Min and current value'
    })
    numericValues: NumericValues;
}