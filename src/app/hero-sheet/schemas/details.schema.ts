import { Prop } from '@nestjs/mongoose';

export class Details {
  @Prop()
  height: string;
  @Prop()
  weight: string;
  @Prop()
  backstory: string;
}
