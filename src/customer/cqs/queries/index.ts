import { GetCustomerByIdQuery } from './get-customer-by-id/get-customer-by-id.query';
import { GetCustomerByIdQueryHandler } from './get-customer-by-id/get-customer-by-id.query-handler';
import { ListCustomersQuery } from './list-customers/list-customers.query';
import { ListCustomersQueryHandler } from './list-customers/list-customers.query-handler';

export const queries = [ListCustomersQuery, GetCustomerByIdQuery];

export const queryHandlers = [
  ListCustomersQueryHandler,
  GetCustomerByIdQueryHandler,
];
