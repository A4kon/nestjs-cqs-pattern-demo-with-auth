import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCustomerDto } from './create-customer.dto';
import * as bcrypt from 'bcrypt';
import { RolesEnum } from 'src/lib/helpers/enums/roles.enum';
import { EventBus } from '@nestjs/cqrs';
import { CustomerCreationFailedEvent } from 'src/auth/cqs/events/customer-creation-failed/customer-creation-failed.event';
import { randomUUID } from 'crypto';
import { CustomerCreatedEvent } from 'src/auth/cqs/events/customer-created/customer-created.event';

@Injectable()
export class CreateCustomerUsecase {
  constructor(private prisma: PrismaService, private eventBus: EventBus) {}
  async execute(params: CreateCustomerDto) {
    const { email, password } = params;
    const exists = await this.prisma.customer.findUnique({
      where: {
        email,
      },
    });
    console.log(exists);
    if (exists) {
      const event = new CustomerCreationFailedEvent(randomUUID());
      await this.eventBus.publish(event);
      throw new BadRequestException('User already exists');
    }
    const hash = await bcrypt.hash(password, 10);
    // TODO: generating and sending otp
    await this.prisma.customer.create({
      data: {
        email,
        password: hash,
        role: RolesEnum.CUSTOMER,
      },
    });

    const event = new CustomerCreatedEvent(randomUUID());
    await this.eventBus.publish(event);
  }
}
