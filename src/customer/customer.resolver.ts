import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetCustomerByIdQuery } from './cqs/queries/get-customer-by-id/get-customer-by-id.query';
import { CustomerModel } from './models/customer.model';
import { GetCustomerByIdArguments } from './models/arguments/get-customer-by-id.arguments';
import { RolesEnum } from 'src/lib/helpers/enums/roles.enum';
import { UseGuards } from '@nestjs/common';
import { HasRole } from 'src/lib/helpers/guards/has-role/has-role.decorator';
import { HasRoleGuard } from 'src/lib/helpers/guards/has-role/has-role.guard';
import { DeleteCustomerCommand } from './cqs/commands/delete-customer/delete-customer.command';
import { ListCustomersQuery } from './cqs/queries/list-customers/list-customers.query';
import { ListCustomersArguments } from './models/arguments/list-customers.arguments';
import { UpdateCustomerInput } from './models/input/update-customer.input';
import { DeleteCustomerInput } from './models/input/delete-customer.input';

@Resolver()
export class CustomerResolver {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  @UseGuards(HasRoleGuard)
  @HasRole(RolesEnum.ADMIN)
  @Mutation(() => Boolean)
  async updateCustomer(@Args() data: UpdateCustomerInput) {
    const command = new DeleteCustomerCommand(data.id);
    return this.commandBus.execute(command);
  }

  @UseGuards(HasRoleGuard)
  @HasRole(RolesEnum.ADMIN)
  @Mutation(() => Boolean)
  async deleteCustomer(@Args() data: DeleteCustomerInput) {
    const command = new DeleteCustomerCommand(data.id);
    return this.commandBus.execute(command);
  }

  @Query(() => CustomerModel)
  async getCustomerById(@Args() data: GetCustomerByIdArguments) {
    const query = new GetCustomerByIdQuery(data.id);
    return this.queryBus.execute(query);
  }

  @UseGuards(HasRoleGuard)
  @HasRole(RolesEnum.ADMIN, RolesEnum.CUSTOMER)
  @Query(() => [CustomerModel])
  async listCustomers(@Args() data: ListCustomersArguments) {
    const query = new ListCustomersQuery(
      data.skip,
      data.take,
      data.where,
      data.cursor,
    );
    return await this.queryBus.execute(query);
  }
}
