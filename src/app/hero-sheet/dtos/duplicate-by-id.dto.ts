import { ApiProperty } from '@nestjs/swagger';

export class DuplicateByIdDto {
  @ApiProperty({
    example: 'CHAOS-N-MAGIC-rLsPo',
    description: 'The ID of the hero sheet to duplicate',
  })
  heroSheetId: string;
}
