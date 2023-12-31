import { SignIncase } from './usecases/sign-in/sign-in.usecase';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthModel } from './models/auth.model';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { CreateCustomerCommand } from './cqs/commands/create-customer/create-customer.command';
import { CreateCustomerInput } from './models/input/create-customer.input';
import { SignInInput } from './models/input/sign-in.input';
import { ValidateUserUsecase } from './usecases/validate-user/validate-user.usecase';
import { randomUUID } from 'crypto';
import { LoginSuccededEvent } from './cqs/events/login-succeded/login-succeded.event';
import { ValidateUserCodeInput } from './models/input/validate-user-code.input';
import { ValidateUserCodeCommand } from './cqs/commands/validate-user/validate-user-code.command';

@Resolver()
export class AuthResolver {
  constructor(
    private validateUserUsecase: ValidateUserUsecase,
    private signInUserCase: SignIncase,
    private commandBus: CommandBus,
    private eventBus: EventBus,
  ) {}

  @Mutation(() => AuthModel)
  async signIn(@Args('data') data: SignInInput) {
    const { id, role, email } = await this.validateUserUsecase.execute(data);
    const event = new LoginSuccededEvent(randomUUID());
    await this.eventBus.publish(event);
    return {
      token: (
        await this.signInUserCase.execute({
          id,
          role,
          email,
        })
      ).access_token,
    };
  }

  @Mutation(() => Boolean)
  async createCustomer(@Args('data') data: CreateCustomerInput) {
    const command = new CreateCustomerCommand(data.email, data.password);
    await this.commandBus.execute(command);
    return true;
  }

  @Mutation(() => Boolean)
  async validateUserCode(@Args('data') data: ValidateUserCodeInput) {
    const command = new ValidateUserCodeCommand(data.email, data.code);
    await this.commandBus.execute(command);
    return true;
  }
}
