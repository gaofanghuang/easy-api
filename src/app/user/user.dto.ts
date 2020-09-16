import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginRegisterDTO {
  @IsNotEmpty({ message: '登录账号不能为空' })
  readonly userName: string;
  @IsNotEmpty({ message: '登录密码不能为空' })
  readonly password: string;
}