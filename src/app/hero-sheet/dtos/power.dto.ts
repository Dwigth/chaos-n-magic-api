import { ApiProperty } from '@nestjs/swagger';
import { PowerType } from 'app/hero-sheet/types/power.type';

export class PowerDto {
  @ApiProperty({
    example: {
      value: 4,
    },
  })
  manna: PowerType;

  @ApiProperty({
    example: {
      value: 4,
    },
  })
  faith: PowerType;

  @ApiProperty({
    example: {
      value: 4,
    },
  })
  ki: PowerType;

  @ApiProperty({
    example: {
      value: 4,
    },
  })
  chaos: PowerType;
}
