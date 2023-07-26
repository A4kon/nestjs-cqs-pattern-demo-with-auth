import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaService } from 'src/prisma.service';
import { usecases } from './usecases';
import { eventHandlers, events } from './cqs/events';
import { LocalStrategy } from 'src/lib/helpers/strategies/local.strategy';
import { JwtStrategy } from 'src/lib/helpers/strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtConfigInterface } from 'src/lib/config/register/jwt.interface';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    CqrsModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<JwtConfigInterface>('jwt').secret,
        signOptions: { expiresIn: '24h' },
      }),
    }),
  ],
  providers: [
    PrismaService,
    LocalStrategy,
    JwtStrategy,
    ...usecases,
    ...eventHandlers,
    ...events,
  ],
})
export class AuthModule {}
