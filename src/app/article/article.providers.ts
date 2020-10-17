import { Connection, Repository } from 'typeorm';
import { Article } from 'src/entity/article.entity';

export const ArticleProviders = [
  {
    provide: 'ArticleRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Article),
    inject: ['DbConnectionToken'],
  },
];