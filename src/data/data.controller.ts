import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { DataEntity } from 'src/models/data.entity';
import { DataService } from './data.service';
import { Request } from 'express';
import { SearchDto } from 'src/models/search.dto';

@Controller('data')
export class DataController {
    constructor(private readonly dataService: DataService) {}

    @Post()
    public async createData(@Req() req: Request, @Body() data: DataEntity): Promise<DataEntity> {
        return await this.dataService.createData(data);
    }

    @Get('search')
    public async getBusinessesByName(@Req() req: Request, @Query() query: SearchDto)/*: Promise<SearchDto[]>*/ {
        return await this.dataService.getDataByDates(query);
    }
}
