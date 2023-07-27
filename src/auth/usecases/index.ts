import { CreateCustomerUsecase } from './create-customer/create-customer.usecase';
import { SignIncase } from './sign-in/sign-in.usecase';
import { ValidateUserCodeUsecase } from './validate-user-code/validate-user-code.usecase';
import { ValidateUserUsecase } from './validate-user/validate-user.usecase';

export const usecases = [
  CreateCustomerUsecase,
  ValidateUserUsecase,
  SignIncase,
  ValidateUserCodeUsecase,
];
