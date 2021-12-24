import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { DataDocument, DataEntity } from 'src/models/data.entity';
import { SearchDto } from 'src/models/search.dto';
import * as fs from 'fs';
import { SearchResDto } from 'src/models/search-res.dto';
const { Parser } = require('json2csv');

@Injectable()
export class DataService {
    constructor(@InjectModel(DataEntity.name) private dataModel: Model<DataDocument>) {}
    
    async getDataByDates(query: SearchDto)/*: Promise<SearchResDto>*/ {
        const result =  this.dataModel.find
        ({
            $and: [
                { "startDate": { $gte: query.startDate } },
                { "endDate": { $lt: query.endDate } },
            ],
        });

        var fields = ['data', 'endDate', 'startDate'];
        // var csvData = json2csv(result, fields);

        try {
            const parser = new Parser({fields});
            const csvData = parser.parse(result);
            console.log(csvData);
            const url: string = this.saveFile(csvData);
            // const data: SearchDto[] = this.dataMapping(result);
            
            return {
                url,
                data: result
            };
          } catch (err) {
            console.error(err);
          }


    }

    async createData(data: DataEntity): Promise<DataEntity> {
        const createdData = new this.dataModel(data);
        return createdData.save();
    }

    private saveFile(data: any) {
        const fileName: string = `data-${Date.now() / 1000 | 0}.csv`;
        fs.writeFileSync(`../../${fileName}`, JSON.stringify(data));
        console.log(`http://localhost:3000/${fileName}`);
        return `http://localhost:3000/${fileName}`;
    }
    
    private dataMapping(result: any){//}: SearchDto[] {
        for (const doc in result) {
            console.log(doc);
        }
    }
}


