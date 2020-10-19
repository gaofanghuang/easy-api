import { Controller, Get, Req, Param, Post, Body, UseGuards, Patch, UsePipes } from '@nestjs/common';
import { ArticleService } from './article.service';
import { EditArticleDTO } from './article.dto';
import { AuthGuard } from '@nestjs/passport';
import { Logger } from 'src/service/utils/log4js';

@Controller('article')
export class ArticleController {
  constructor(private readonly article: ArticleService) {}

  /** 根据条件查找文章列表 */
  @Get()
  async findList(@Req() request): Promise<any> {
    try {
      const query = request.query;
      let article = await this.article.findList(query);
      // Logger.info('article', article, query);
      return article;
    } catch (err) {
      return err;
    }
  }

  /** 获取指定ID的文章 */
  @Get(':id')
  async findById(@Param() params): Promise<any> {
    try {
      let article = await this.article.findById(params.id);
      return article;
    } catch (err) {
      return err;
    }
  }

  /** 新增文章 */
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async add(@Body() body: EditArticleDTO): Promise<any> {
    let article = await this.article.add(body);
    return article;
  }
}
