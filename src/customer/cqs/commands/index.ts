import { DeleteCustomerCommand } from './delete-customer/delete-customer.command';
import { DeleteCustomerCommandHandler } from './delete-customer/delete-customer.command-handler';
import { UpdateCustomerCommand } from './update-customer/update-customer.command';
import { UpdateCustomerCommandHandler } from './update-customer/update-customer.command-handler';

export const commands = [UpdateCustomerCommand, DeleteCustomerCommand];

export const commandHandlers = [
  UpdateCustomerCommandHandler,
  DeleteCustomerCommandHandler,
];
