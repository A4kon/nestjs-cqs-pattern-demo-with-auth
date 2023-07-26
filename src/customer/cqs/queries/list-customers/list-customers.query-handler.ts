import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { ListCustomersUsecase } from 'src/customer/usecases/list-customers/list-customer.usecase';
import { ListCustomersQuery } from './list-customers.query';

@QueryHandler(ListCustomersQuery)
export class ListCustomersQueryHandler
  implements ICommandHandler<ListCustomersQuery>
{
  constructor(private usecase: ListCustomersUsecase) {}

  async execute(query: ListCustomersQuery) {
    return await this.usecase.search(query);
  }
}
