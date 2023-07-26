import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCustomerByIdQuery } from './get-customer-by-id.query';
import { GetCustomerByIdUsecase } from 'src/customer/usecases/get-customer-by-id/get-customer-by-id.usecase';

@QueryHandler(GetCustomerByIdQuery)
export class GetCustomerByIdQueryHandler
  implements ICommandHandler<GetCustomerByIdQuery>
{
  constructor(private usecase: GetCustomerByIdUsecase) {}

  async execute(query: GetCustomerByIdQuery) {
    return await this.usecase.search(query);
  }
}
