import { Connection, Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';

export const UserProviders = [
  {
    provide: 'UserRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DbConnectionToken'],
  },
];