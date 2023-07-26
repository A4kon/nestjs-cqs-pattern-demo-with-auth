import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CustomerDeletedEvent } from './customer-deleted.event';
import { Logger } from '@nestjs/common';

@EventsHandler(CustomerDeletedEvent)
export class CustomerDeletedEventHandler
  implements IEventHandler<CustomerDeletedEvent>
{
  private readonly logger = new Logger(CustomerDeletedEventHandler.name);

  handle(event: CustomerDeletedEvent) {
    this.logger.log(event);
  }
}
