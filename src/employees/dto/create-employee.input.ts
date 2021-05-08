import { InputType, Float, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateEmployee {
  @Field({ description: 'Employee name' })
  readonly name: string;

  @Field(() => Int, { description: 'Company id' })
  company: number;

  @Field(() => Float, { description: 'Amount spent on voucher' })
  readonly amountSpent: number;
}
