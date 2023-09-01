import { Prop } from '@nestjs/mongoose';

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
