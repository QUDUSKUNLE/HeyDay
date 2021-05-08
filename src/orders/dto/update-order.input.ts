import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateOrder {
  @Field(() => Int, { description: 'Order id' })
  readonly id: number;

  @Field(() => Int, { description: 'Employee id' })
  employee: number;

  @Field(() => Int, { description: 'Voucher id' })
  voucher: number;
}
