import { Controller, Get, Param, Post, Body, UseGuards, Patch, UsePipes } from '@nestjs/common';
import { ToolService } from './tool.service';

@Controller('tool')
export class ToolController {
  constructor(private readonly tool: ToolService) {}

  /** 获取指定城市的天气 */
  @Get('weather/:cityName')
  async weather(@Param() params): Promise<any> {
    try {
      let weather = await this.tool.weather(params.cityName);
      return weather;
    } catch (err) {
      return err;
    }
  }
}
