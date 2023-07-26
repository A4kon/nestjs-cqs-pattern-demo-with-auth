import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CustomerCreationFailedEvent } from './customer-creation-failed.event';
import { Logger } from '@nestjs/common';

@EventsHandler(CustomerCreationFailedEvent)
export class CustomerCreationFailedEventHandler
  implements IEventHandler<CustomerCreationFailedEvent>
{
  private readonly logger = new Logger(CustomerCreationFailedEventHandler.name);

  handle(event: CustomerCreationFailedEvent) {
    this.logger.log(event);
  }
}
