import { CreateEmployee } from './create-employee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmployee extends PartialType(CreateEmployee) {
  @Field()
  readonly id: number;

  @Field()
  readonly name: string;

  // @Field()
  // readonly company: string;

  @Field(() => Int, { description: 'Amount spent on voucher' })
  readonly amountSpent: number;
}
