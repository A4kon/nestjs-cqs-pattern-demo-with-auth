import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaService } from 'src/prisma.service';
import { usecases } from './usecases';
import { eventHandlers, events } from './cqs/events';
import { commandHandlers, commands } from './cqs/commands';
import { queries, queryHandlers } from './cqs/queries';
import { CustomerResolver } from './customer.resolver';

@Module({
  imports: [CqrsModule],
  providers: [
    PrismaService,
    CustomerResolver,
    ...usecases,
    ...eventHandlers,
    ...events,
    ...commands,
    ...commandHandlers,
    ...queries,
    ...queryHandlers,
  ],
})
export class CustomerModule {}
