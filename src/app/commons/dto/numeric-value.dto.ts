import { ApiProperty } from '@nestjs/swagger';

export class NumericValuesDto {
  @ApiProperty({
    example: 1,
    description: 'Values for Min',
  })
  min: number;

  @ApiProperty({
    example: 10,
    description: 'Values for Max',
  })
  max: number;

  @ApiProperty({
    example: 4,
    description: 'Values for current value',
  })
  value: number;
}
