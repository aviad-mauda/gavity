import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';

@Module({
  imports: [
    DataModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.i11zf.mongodb.net/data'), DataModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
