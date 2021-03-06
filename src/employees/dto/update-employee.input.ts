import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class UpdateEmployee {
  @Field(() => Int, { description: 'Employee id' })
  readonly id: number;

  @Field({ description: 'Employee name' })
  name?: string;

  @Field(() => Int, { description: 'Company id' })
  company?: number;

  @Field(() => Float, { description: 'Amount spent on voucher' })
  amountSpent?: number;
}
