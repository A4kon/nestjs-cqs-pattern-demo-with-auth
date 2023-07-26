import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { UnauthorizedCommandEvent } from './unauthorized-command.event';

@EventsHandler(UnauthorizedCommandEvent)
export class UnauthorizedCommandEventHandler
  implements IEventHandler<UnauthorizedCommandEvent>
{
  private readonly logger = new Logger(UnauthorizedCommandEventHandler.name);

  handle(event: UnauthorizedCommandEvent) {
    this.logger.log(event.id);
  }
}
