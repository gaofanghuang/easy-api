import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcomeTips(): string {
    return 'Hi! 欢迎访问Easy Api!';
  }
}
