import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataEntity, DataSchema } from 'src/models/data.entity';
import { DataController } from './data.controller';
import { DataService } from './data.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: DataEntity.name, schema: DataSchema }])],
    providers: [DataService],
    controllers: [DataController],
})
export class DataModule {}
