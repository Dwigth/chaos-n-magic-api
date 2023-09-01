import { Prop } from '@nestjs/mongoose';
import { InventoryItem } from 'app/hero-sheet/schemas/inventory-item.schema';

export class Inventory {
  @Prop()
  coins: number;
  @Prop([{ type: InventoryItem }])
  items: InventoryItem[];
  @Prop()
  carriedWeight: number;
}
