import { CreateCustomerCommand } from './create-customer/create-customer.command';
import { CreateCustomerCommandHandler } from './create-customer/create-customer.command-handler';
import { ValidateUserCodeCommand } from './validate-user/validate-user-code.command';
import { ValidateUserCodeCommandHandler } from './validate-user/validate-user-code.command-handler';

export const commands = [CreateCustomerCommand, ValidateUserCodeCommand];
export const commandHandlers = [
  CreateCustomerCommandHandler,
  ValidateUserCodeCommandHandler,
];
