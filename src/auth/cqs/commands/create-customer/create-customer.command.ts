export class CreateCustomerCommand {
  constructor(
    public readonly email: string,
    public readonly password: string,
  ) {}
}
