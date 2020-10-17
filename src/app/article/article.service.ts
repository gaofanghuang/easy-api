import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Article } from 'src/entity/article.entity';
import { Logger } from 'src/service/utils/log4js';

@Injectable()
export class ArticleService {
  constructor(
    @Inject('ArticleRepositoryToken')
    private readonly articleRepo: Repository<Article>
  ) {}

  /** 查找所有文章列表 */
  async findAll(): Promise<any> {
    try {
      const res = await this.articleRepo.find();
      return res;
    } catch (err) {
      return err;
    }
  }

  /** 根据条件查找文章列表 */
  async findList(query: { title: string }): Promise<any | undefined> {
    try {
      const res = await this.articleRepo.find(query);
      return res;
    } catch (err) {
      return void 0;
    }
  }

  /** 根据id查找文章详情 */
  async findById(id: number): Promise<any | undefined> {
    try {
      const res = (await this.articleRepo.findOne({ id })) || null;
      return res;
    } catch (err) {
      return void 0;
    }
  }
}
