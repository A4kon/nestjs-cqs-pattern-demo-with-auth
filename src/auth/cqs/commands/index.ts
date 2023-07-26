import { CreateCustomerCommand } from './create-customer/create-customer.command';
import { CreateCustomerCommandHandler } from './create-customer/create-customer.command-handler';

export const commands = [CreateCustomerCommand];
export const commandHandlers = [CreateCustomerCommandHandler];
