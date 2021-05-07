import { CreateEmployeeInput } from './create-employee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  @Field()
  readonly id: number;

  @Field()
  readonly name: string;

  @Field()
  readonly companyId: string;

  @Field(() => Int, { description: 'Amount spent on voucher' })
  readonly amountSpent: number;
}
