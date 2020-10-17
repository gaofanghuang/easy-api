import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './app/user/user.module';
import { ToolModule } from './app/tool/tool.module';
import { ArticleModule } from './app/article/article.module';

@Module({
  imports: [
    UserModule,
    ToolModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
