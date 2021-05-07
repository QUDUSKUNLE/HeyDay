import { InputType, Field } from '@nestjs/graphql';
import { CreateEmployee } from '../../employees/dto/create-employee.input';
import { CreateVoucher } from '../../vouchers/dto/create-voucher.input';

@InputType()
export class CreateOrder {
  @Field({ description: 'Employee id' })
  employee: CreateEmployee;

  @Field({ description: 'Voucher id' })
  voucher: CreateVoucher;
}
