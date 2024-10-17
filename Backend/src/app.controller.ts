import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('events')
  getEvents(
    @Query('lab') lab: string,
    @Query('date') date: string,
  ) {
    return this.appService.getEventsForLabAndDate(lab, date);
  }
}
