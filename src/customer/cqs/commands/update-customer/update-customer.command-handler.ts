import { UpdateCustomerUsecase } from 'src/customer/usecases/update-customer/update-customer.usecase';
import { UpdateCustomerCommand } from './update-customer.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateCustomerCommand)
export class UpdateCustomerCommandHandler
  implements ICommandHandler<UpdateCustomerCommand>
{
  constructor(private usecase: UpdateCustomerUsecase) {}

  async execute(command: UpdateCustomerCommand) {
    await this.usecase.execute(command);
  }
}
