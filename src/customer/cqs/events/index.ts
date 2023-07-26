import { CustomerDeletedEvent } from './customer-deleted/customer-deleted.event';
import { CustomerDeletedEventHandler } from './customer-deleted/customer-deleted.event-handler';
import { CustomerUpdatedEvent } from './customer-updated/customer-updated.event';
import { CustomerUpdatedEventHandler } from './customer-updated/customer-updated.event-handler';

export const events = [CustomerUpdatedEvent, CustomerDeletedEvent];

export const eventHandlers = [
  CustomerUpdatedEventHandler,
  CustomerDeletedEventHandler,
];
