import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserProviders } from './user.providers';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/config/jwtSecret';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      // token 过期时效
      signOptions: { expiresIn: '8h' },
    }),
  ],
  controllers: [UserController],
  providers: [...UserProviders, UserService, AuthService, JwtStrategy],
  exports: [UserService, AuthService],
})
export class UserModule {}
