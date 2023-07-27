import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ValidateUserCodeUsecase } from 'src/auth/usecases/validate-user-code/validate-user-code.usecase';
import { ValidateUserCodeCommand } from './validate-user-code.command';

@CommandHandler(ValidateUserCodeCommand)
export class ValidateUserCodeCommandHandler
  implements ICommandHandler<ValidateUserCodeCommand>
{
  constructor(private usecase: ValidateUserCodeUsecase) {}

  async execute(command: ValidateUserCodeCommand) {
    await this.usecase.execute(command);
  }
}
