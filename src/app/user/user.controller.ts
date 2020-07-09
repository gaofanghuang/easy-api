import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly users: UserService) {}

  /** 获取用户信息 */
  @Get(':id')
  findOne(@Param() params): any {
    console.log('user params', params);
    return this.users.findOne(params.id);
  }

  /** 注册用户 */
  @Post('register')
  async register(@Body() body: any) {
    return await this.users.register(body);
  }
}
