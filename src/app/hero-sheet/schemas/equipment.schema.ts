import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GenericItemSchema } from 'app/commons/schemas/generic-item.schema';
import { GenericItemType } from 'app/commons/types/generic-item.type';
import { Bag } from 'app/hero-sheet/schemas/bag.schema';
import { Weapon } from 'app/hero-sheet/schemas/weapon.schema';
import { HydratedDocument } from 'mongoose';

export type EquipmentDocument = HydratedDocument<Equipment>;

@Schema()
export class Equipment {
  @Prop()
  hat: string;
  @Prop([{ type: Weapon }])
  weapons: Weapon[];
  @Prop({ type: GenericItemSchema })
  armor: GenericItemType;
  @Prop({ type: GenericItemSchema })
  mask: GenericItemType;
  @Prop({ type: GenericItemSchema })
  cape: GenericItemType;
  @Prop({ type: GenericItemSchema })
  necklace: GenericItemType;
  @Prop({ type: GenericItemSchema })
  bracelet: GenericItemType;
  @Prop([{ type: GenericItemSchema }])
  ring: GenericItemType[];
  @Prop({ type: GenericItemSchema })
  boots: GenericItemType;
  @Prop({ type: GenericItemSchema })
  special: GenericItemType;
  @Prop([{ type: Bag }])
  bags: Bag[];
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
