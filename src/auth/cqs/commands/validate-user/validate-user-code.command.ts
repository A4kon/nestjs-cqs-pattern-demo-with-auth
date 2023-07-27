export class ValidateUserCodeCommand {
  constructor(public readonly email: string, public readonly code: number) {}
}
