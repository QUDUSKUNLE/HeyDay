import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class UpdateVoucher {
  @Field(() => Int, { description: 'Voucher id' })
  readonly id: number;

  @Field(() => Float, { description: 'Voucher cost' })
  readonly cost: number;
}
