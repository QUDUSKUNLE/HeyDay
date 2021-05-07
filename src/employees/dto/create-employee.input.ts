import { InputType, Int, Field } from '@nestjs/graphql';
// import { Company } from '../'

@InputType()
export class CreateEmployee {
  @Field()
  readonly name: string;

  // @Field()
  // readonly company: string;

  @Field(() => Int, { description: 'Amount spent on voucher' })
  readonly amountSpent: number;
}
