import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetCustomerByIdQuery } from './cqs/queries/get-customer-by-id/get-customer-by-id.query';
import { CustomerModel } from './models/customer.model';
import { GetCustomerByIdArguments } from './models/arguments/get-customer-by-id.arguments';

@Resolver()
export class CustomerResolver {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  // @Mutation(() => Boolean)
  // async updateCustomer() {}

  // @Mutation(() => Boolean)
  // async deleteCustomer() {}

  @Query(() => CustomerModel)
  async getCustomerById(@Args() data: GetCustomerByIdArguments) {
    const query = new GetCustomerByIdQuery(data.id);
    return this.queryBus.execute(query);
  }

  // @Query(() => [Customer])
  // async listCustomers() {
  // return await this.queryBus.publish()
  // }
}
