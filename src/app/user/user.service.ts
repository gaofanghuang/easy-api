import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryToken')
    private readonly userRepo: Repository<User>
  ) {}

  /** 查找所有用户 */
  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  /** 根据条件查找用户 */
  async findOne(userName: string): Promise<any | null> {
    try {
      const user = null;
      return user;
    } catch (error) {
      console.error(error);
      return void 0;
    }
  }

  /** 根据id查找用户 */
  async findById(id: number): Promise<any | null> {
    return [];
  }

  /**
   * 注册
   * @param requestBody 请求体
   */
  async register(requestBody: any): Promise<any> {
    const { userName, password } = requestBody;
    const user = await this.findOne(userName);
    if (user) {
      return {
        code: 400,
        msg: '用户已存在',
      };
    }
    try {
      const userData = new User();
      userData.userName = userName;
      userData.nickName = userName;
      userData.password = password;
      await this.userRepo.save(userData);
      return {
        code: 200,
        msg: 'Success',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }
}
