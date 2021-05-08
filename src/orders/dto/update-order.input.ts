import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateEmployee } from '../../employees/dto/create-employee.input';
import { CreateVoucher } from '../../vouchers/dto/create-voucher.input';

@InputType()
export class UpdateOrder {
  @Field(() => Int, { description: 'Order id' })
  readonly id: number;

  // @Field(() => CreateEmployee, { description: 'Employee id' })
  // readonly employee: CreateEmployee;

  // @Field(() => CreateVoucher, { description: 'Voucher id' })
  // readonly voucher: CreateVoucher;
}
