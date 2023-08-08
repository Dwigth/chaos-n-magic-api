import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ThrottlerConfig } from 'app/config/enums/config.enum';
import { HeroSheetController } from 'app/hero-sheet/hero-sheet.controller';
import { HeroSheetService } from './hero-sheet.service';
import {
  HeroBasicInfo,
  HeroBasicInfoSchema,
} from './schemas/hero-basic-info.schema';
import { HeroSheet, HeroSheetSchema } from './schemas/hero-sheet.schema';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: ThrottlerConfig.TTL,
      limit: ThrottlerConfig.LIMIT,
    }),
    MongooseModule.forFeature([
      { name: HeroSheet.name, schema: HeroSheetSchema },
      { name: HeroBasicInfo.name, schema: HeroBasicInfoSchema },
    ]),
  ],
  controllers: [HeroSheetController],
  providers: [
    HeroSheetService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class HeroSheetModule {}
