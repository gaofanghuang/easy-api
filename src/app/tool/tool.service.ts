import { Injectable } from '@nestjs/common';

@Injectable()
export class ToolService {
  /** 获取指定城市的天气 */
  async weather(cityName: string): Promise<any> {
    try {
      return cityName;
    } catch (err) {
      return err;
    }
  }
}
