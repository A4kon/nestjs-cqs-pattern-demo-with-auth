import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteCustomerCommand } from './delete-customer.command';
import { DeleteCustomerUsecase } from 'src/customer/usecases/delete-customer/delete-customer.usecase';

@CommandHandler(DeleteCustomerCommand)
export class DeleteCustomerCommandHandler
  implements ICommandHandler<DeleteCustomerCommand>
{
  constructor(private usecase: DeleteCustomerUsecase) {}

  async execute(command: DeleteCustomerCommand) {
    await this.usecase.execute(command);
  }
}
