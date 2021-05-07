import { InputType, Float, Field } from '@nestjs/graphql';
import { Currency } from '../../entities/common.entity';

@InputType()
export class CreateVoucher {
  @Field(() => Float, { description: 'Voucher cost' })
  cost: number;

  @Field()
  currency: Currency;
}
