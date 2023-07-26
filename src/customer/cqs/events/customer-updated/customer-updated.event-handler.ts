import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CustomerUpdatedEvent } from './customer-updated.event';
import { Logger } from '@nestjs/common';

@EventsHandler(CustomerUpdatedEvent)
export class CustomerUpdatedEventHandler
  implements IEventHandler<CustomerUpdatedEvent>
{
  private readonly logger = new Logger(CustomerUpdatedEventHandler.name);

  handle(event: CustomerUpdatedEvent) {
    this.logger.log(event);
  }
}
