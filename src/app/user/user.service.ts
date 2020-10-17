import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { RoleCode } from 'src/config/const';
import { makeSalt, encryptPassword } from 'src/service/utils/cryptogram';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryToken')
    private readonly userRepo: Repository<User>
  ) {}

  /** 查找所有用户列表 */
  async findAll(): Promise<any> {
    try {
      return await this.userRepo.find();
    } catch (err) {
      return err;
    }
  }

  /** 根据条件查找用户列表 */
  async findList(query: { userName: string }): Promise<any | undefined> {
    try {
      return await this.userRepo.find(query);
    } catch (err) {
      return void 0;
    }
  }

  /** 根据id查找用户 */
  async findById(id: number): Promise<any | undefined> {
    try {
      return await this.userRepo.findOne({ id });
    } catch (err) {
      return void 0;
    }
  }

  /** 注册 */
  async register(requestBody: any): Promise<any> {
    const { userName, password } = requestBody;
    const res = await this.findList({userName});
    if (res !== undefined || res.length > 0) {
      return '用户已存在';
    }
    const salt = makeSalt(); // 制作密码盐
    const hashPwd = encryptPassword(password, salt); // 加密密码
    const userData = new User();
    userData.userName = userName;
    userData.nickName = userName;
    userData.password = hashPwd;
    userData.passwordSalt = salt;
    /** 默认是1 */
    userData.role = RoleCode.Default;
    try {
      return await this.userRepo.save(userData);
    } catch (err) {
      return err;
    }
  }

  /** 编辑用户信息 */
  async edit(requestBody: any): Promise<any> {
    console.log('编辑用户信息', requestBody);
    try {
      return '';
    } catch (err) {
      return err;
    }
  }
}
