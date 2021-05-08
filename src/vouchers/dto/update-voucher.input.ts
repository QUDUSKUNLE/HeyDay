import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { Currency, VoucherCategory } from '../../entities/common.entity';

@InputType()
export class UpdateVoucher {
  @Field(() => Int, { description: 'Voucher id' })
  readonly id: number;

  @Field(() => Float, { description: 'Voucher cost' })
  readonly cost: number;

  @Field({ description: 'Voucher currency' })
  readonly currency: Currency;

  @Field({ description: 'Voucher category' })
  readonly voucher: VoucherCategory;
}
