import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type InventoryItemDocument = HydratedDocument<InventoryItem>;

@Schema()
export class InventoryItem {
  @Prop()
  name: string;
  @Prop()
  weight: number;
  @Prop()
  quantity: number;
  @Prop()
  isEquipped: boolean;
}

export const InventoryItemSchema = SchemaFactory.createForClass(InventoryItem);
