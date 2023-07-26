import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtConfig } from './register/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [JwtConfig],
      isGlobal: true,
    }),
  ],
})
export class ConfigurationModule {}
