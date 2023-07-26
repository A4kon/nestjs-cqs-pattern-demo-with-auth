import { CreateCustomerUsecase } from './create-customer/create-customer.usecase';
import { SignIncase } from './sign-in/sign-in.usecase';
import { ValidateUserUsecase } from './validate-user/validate-user.usecase';

export const usecases = [
  CreateCustomerUsecase,
  ValidateUserUsecase,
  SignIncase,
];
