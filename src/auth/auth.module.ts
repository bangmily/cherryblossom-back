import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google/google.strategy';

@Module({
  controllers: [AuthController],
  providers: [
    GoogleStrategy // provider 등록
  ]
})
export class AuthModule {}