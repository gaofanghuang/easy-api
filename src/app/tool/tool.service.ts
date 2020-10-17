import { Injectable, HttpService } from '@nestjs/common';
import { Logger } from 'src/service/utils/log4js';

@Injectable()
export class ToolService {
  constructor(private readonly httpService: HttpService) {}

  /** 获取指定城市的天气 */
  async weather(cityName: string): Promise<any> {
    // Logger.info('cityName', cityName);
    try {
      // 这里转发第三方网站的天气数据
      const res = await this.httpService.get(`http://wthrcdn.etouch.cn/weather_mini?city=${encodeURIComponent(cityName)}`).toPromise();
      return res.data.data;
    } catch (err) {
      return err;
    }
  }
}
