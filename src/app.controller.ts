import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { DataEntity } from './models/data.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
