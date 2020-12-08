import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/service/database/database.module';
import { UserProviders } from './user.providers';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from 'src/app/user/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
  ],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
  exports: [UserService],
})
export class UserModule {}
