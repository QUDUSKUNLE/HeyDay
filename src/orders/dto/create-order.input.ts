import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateOrder {
  @Field(() => Int, { description: 'Employee id' })
  employee: number;

  @Field(() => Int, { description: 'Voucher id' })
  voucher: number;
}
