import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
  @Field()
  readonly name: string;

  @Field()
  readonly companyId: string;

  @Field(() => Int, { description: 'Amount spent on voucher' })
  readonly amountSpent: number;
}
