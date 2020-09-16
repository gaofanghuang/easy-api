import { Controller, Get, Param, Post, Body, UseGuards, Patch, UsePipes } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/app/user/auth/auth.service';
import { UserService } from './user.service';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { LoginRegisterDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly user: UserService, private readonly auth: AuthService) {}

  /** 获取用户信息 */
  @Get(':id')
  async findOne(@Param() params): Promise<any> {
    try {
      let user = await this.user.findById(params.id);
      user = this.filterSth(user);
      return user;
    } catch (err) {
      return err;
    }
  }

  /** JWT验证 - Step 1: 用户请求登录 */
  @UsePipes(new ValidationPipe())
  @Post('login')
  async login(@Body() params: LoginRegisterDTO): Promise<any> {
    console.log('JWT验证 - Step 1: 用户请求登录');
    try {
      let user = await this.auth.validateUser(params.userName, params.password);
      let token = await this.auth.certificate(user);
      user.token = token;
      user = this.filterSth(user);
      return user;
    } catch (err) {
      return err;
    }
  }

  /** 注册用户 */
  // 使用管道验证
  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() body: LoginRegisterDTO): Promise<any> {
    let user = await this.user.register(body);
    user = this.filterSth(user);
    return user;
  }

  /** 过滤敏感信息 */
  filterSth(obj: any) {
    delete obj.password;
    delete obj.passwordSalt;
    return obj;
  }

  /** 编辑用户信息 */
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  // 指定 DTO类型
  async edit(@Body() body): Promise<any> {
    return await this.user.edit(body);
  }
}
