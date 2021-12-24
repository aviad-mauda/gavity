import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Entity } from "typeorm";

export type DataDocument = DataEntity & Document;

@Schema()
export class DataEntity {
    
    @Prop({ required: true })
    startDate: Date;

    @Prop({ required: true })
    endDate: Date;

    @Prop({ required: true })
    data: string;
};

export const DataSchema = SchemaFactory.createForClass(DataEntity);
