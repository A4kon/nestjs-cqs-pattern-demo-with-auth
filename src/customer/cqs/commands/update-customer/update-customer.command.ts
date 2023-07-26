export class UpdateCustomerCommand {
  constructor(public readonly id: string, public readonly email: string) {}
}
