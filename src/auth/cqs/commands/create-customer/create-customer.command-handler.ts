import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCustomerUsecase } from 'src/auth/usecases/create-customer/create-customer.usecase';
import { CreateCustomerCommand } from './create-customer.command';

@CommandHandler(CreateCustomerCommand)
export class CreateCustomerCommandHandler
  implements ICommandHandler<CreateCustomerCommand>
{
  constructor(private usecase: CreateCustomerUsecase) {}

  async execute(command: CreateCustomerCommand) {
    await this.usecase.execute(command);
  }
}
