import { ApiProperty } from '@nestjs/swagger';
import { InventoryItem } from 'app/hero-sheet/types/inventory-item.type';

export class InventoryDto {
  @ApiProperty({
    example: 100,
    description: 'The current amount of coins the hero has',
  })
  coins: number;

  @ApiProperty({
    example: [
      {
        name: 'Black Poison',
        weight: 2,
        quantity: 1,
        isEquipped: false,
        showDescription: true,
        description: 'The poison is black...',
      },
    ],
    description: 'Collection of items',
  })
  items: InventoryItem[];

  @ApiProperty({
    example: 2,
    description: 'The value of all the items weight',
  })
  carriedWeight: number;
}
