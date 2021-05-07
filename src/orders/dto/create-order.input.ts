import { InputType, Field } from '@nestjs/graphql';
import { CreateEmployee } from '../../employees/dto/create-employee.input';
import { CreateVoucher } from '../../vouchers/dto/create-voucher.input';

@InputType()
export class CreateOrder {
  @Field(() => CreateEmployee, { description: 'Employee id' })
  employee: CreateEmployee;

  @Field(() => CreateVoucher, { description: 'Voucher id' })
  voucher: CreateVoucher;
}
