import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroSheetModule } from 'app/hero-sheet/hero-sheet.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    HeroSheetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
