import { ApiProperty } from "@nestjs/swagger";
import { NumericValuesDto } from "app/commons/dto/numeric-value.dto";

export class StanceDto extends NumericValuesDto {
    @ApiProperty({
        example: 1,
        description: 'Value of the temporal stance'
    })
    tempStance: number;
}