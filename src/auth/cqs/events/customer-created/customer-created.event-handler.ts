import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CustomerCreatedEvent } from './customer-created.event';
import { Logger } from '@nestjs/common';

@EventsHandler(CustomerCreatedEvent)
export class CustomerCreatedEventHandler
  implements IEventHandler<CustomerCreatedEvent>
{
  private readonly logger = new Logger(CustomerCreatedEventHandler.name);

  handle(event: CustomerCreatedEvent) {
    this.logger.log(event);
  }
}
