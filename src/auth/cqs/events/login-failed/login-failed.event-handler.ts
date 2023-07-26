import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { LoginFailedEvent } from './login-failed.event';

@EventsHandler(LoginFailedEvent)
export class LoginFailedEventHandler
  implements IEventHandler<LoginFailedEvent>
{
  private readonly logger = new Logger(LoginFailedEventHandler.name);

  handle(event: LoginFailedEvent) {
    this.logger.log(event);
  }
}
