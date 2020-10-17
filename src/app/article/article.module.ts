import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/service/database/database.module';
import { ArticleProviders } from './article.providers';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ArticleController],
  providers: [...ArticleProviders, ArticleService],
  exports: [ArticleService],
})
export class ArticleModule {}
