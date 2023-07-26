import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { LoginSuccededEvent } from './login-succeded.event';

@EventsHandler(LoginSuccededEvent)
export class LoginSuccededEventHandler
  implements IEventHandler<LoginSuccededEvent>
{
  private readonly logger = new Logger(LoginSuccededEventHandler.name);

  handle(event: LoginSuccededEvent) {
    this.logger.log(event);
  }
}
