import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { ValidateUserDto } from './validate-user.dto';
import { RolesEnum } from 'src/lib/helpers/enums/roles.enum';
import { LoginFailedEvent } from 'src/auth/cqs/events/login-failed/login-failed.event';
import { EventBus } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';

@Injectable()
export class ValidateUserUsecase {
  constructor(private prisma: PrismaService, private eventBus: EventBus) {}
  async execute(params: ValidateUserDto) {
    const { email } = params;
    const user = await this.prisma.customer.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      const event = new LoginFailedEvent(randomUUID());
      this.eventBus.publish(event);
      throw new NotFoundException();
    }
    const match = await bcrypt.compare(params.password, user.password);
    if (!match) {
      const event = new LoginFailedEvent(randomUUID());
      this.eventBus.publish(event);
      throw new UnauthorizedException();
    }

    return {
      id: user.id,
      email: user.email,
      role: user.role as RolesEnum,
    };
  }
}
