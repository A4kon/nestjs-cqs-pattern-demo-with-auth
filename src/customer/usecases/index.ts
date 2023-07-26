import { DeleteCustomerUsecase } from './delete-customer/delete-customer.usecase';
import { GetCustomerByIdUsecase } from './get-customer-by-id/get-customer-by-id.usecase';
import { ListCustomersUsecase } from './list-customers/list-customer.usecase';
import { UpdateCustomerUsecase } from './update-customer/update-customer.usecase';

export const usecases = [
  DeleteCustomerUsecase,
  UpdateCustomerUsecase,
  ListCustomersUsecase,
  GetCustomerByIdUsecase,
];
