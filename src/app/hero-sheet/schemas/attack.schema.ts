import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AttackDocument = HydratedDocument<Attack>;

@Schema()
export class Attack {
  @Prop()
  name: string;
  @Prop()
  damage: string;
  @Prop()
  damageType: string;
  @Prop()
  energy: number;
}

export const AttackSchema = SchemaFactory.createForClass(Attack);
