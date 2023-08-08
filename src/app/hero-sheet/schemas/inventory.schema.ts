import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { InventoryItem } from 'app/hero-sheet/schemas/inventory-item.schema';
import { HydratedDocument } from 'mongoose';

export type InventoryDocument = HydratedDocument<Inventory>;

@Schema()
export class Inventory {
  @Prop()
  coins: number;
  @Prop([{ type: InventoryItem }])
  items: InventoryItem[];
  @Prop()
  carriedWeight: number;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
