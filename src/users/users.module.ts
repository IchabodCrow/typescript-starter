import { Module } from '@nestjs/common';
import RegisteredJwtModule from 'src/shared/jwt-module';
import { TypeOrmModule } from '@nestjs/typeorm';
import SignInService from './sign-in.service';
import { User } from './user.entity';
import UsersResolver from './users.resolver';

@Module({
  imports: [RegisteredJwtModule, TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, SignInService],
  exports: [],
})
export class UsersModule {}
