import { CommandBus } from '@nestjs/cqrs';
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { Customer } from 'lib/entities/customer.entity';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private commandBus: CommandBus) {}

  @Mutation(() => Boolean)
  async updateCustomer() {}

  @Mutation(() => Boolean)
  async deleteCustomer() {}

  @Query(() => Customer)
  async getCustomerById() {}

  @Query(() => [Customer])
  async listCustomers() {}
}
