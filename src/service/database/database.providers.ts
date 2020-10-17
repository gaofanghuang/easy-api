import { createConnection } from 'typeorm';
import db from 'src/config/db';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: db.mysql.host,
        port: db.mysql.port,
        username: db.mysql.user,
        password: db.mysql.password,
        database: db.mysql.database,
        entities: [__dirname + '/../../entity/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
