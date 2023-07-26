import { CustomerCreatedEvent } from './customer-created/customer-created.event';
import { CustomerCreatedEventHandler } from './customer-created/customer-created.event-handler';
import { LoginFailedEvent } from './login-failed/login-failed.event';
import { LoginFailedEventHandler } from './login-failed/login-failed.event-handler';
import { LoginSuccededEvent } from './login-succeded/login-succeded.event';
import { LoginSuccededEventHandler } from './login-succeded/login-succeded.event-handler';
import { UnauthorizedCommandEvent } from './unauthorized-command/unauthorized-command.event';
import { UnauthorizedCommandEventHandler } from './unauthorized-command/unauthorized-command.event-handler';

export const events = [
  LoginFailedEvent,
  LoginSuccededEvent,
  UnauthorizedCommandEvent,
  CustomerCreatedEvent,
];
export const eventHandlers = [
  LoginFailedEventHandler,
  LoginSuccededEventHandler,
  UnauthorizedCommandEventHandler,
  CustomerCreatedEventHandler,
];
