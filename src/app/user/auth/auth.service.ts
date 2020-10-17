import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { JwtService } from '@nestjs/jwt';
import { encryptPassword } from 'src/service/utils/cryptogram';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // JWT验证 - Step 2: 校验用户信息
  async validateUser(userName: string, password: string): Promise<any> {
    console.log('JWT验证 - Step 2: 校验用户信息');
    const user = await this.usersService.findList({userName})
    if (user !== undefined) {
      const hashedPassword = user.password;
      const salt = user.passwordSalt;
      // 通过密码盐，加密传参，再与数据库里的比较，判断是否相等
      const hashPassword = encryptPassword(password, salt);
      if (hashedPassword === hashPassword) {
        // 密码正确
        return user;
      } else {
        // 密码错误
        throw new BadRequestException('密码错误');
      }
    }
    // 查无此人
    throw '查无此人';
  }

  // JWT验证 - Step 3: 处理 jwt 签证
  async certificate(user: any) {
    const payload = {
      userName: user.userName,
      id: user.id,
      nickName: user.nickName,
      role: user.role,
    };
    console.log('JWT验证 - Step 3: 处理 jwt 签证');
    try {
      const token = this.jwtService.sign(payload);
      return token;
    } catch (error) {
      throw new BadRequestException('密码错误');
    }
  }
}
