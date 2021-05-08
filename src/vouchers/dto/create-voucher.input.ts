import { InputType, Float, Field } from '@nestjs/graphql';
import { Currency, VoucherCategory } from '../../entities/common.entity';

@InputType()
export class CreateVoucher {
  @Field(() => Float, { description: 'Voucher cost' })
  readonly cost: number;

  @Field({ description: 'Voucher currency' })
  readonly currency: Currency;

  @Field({ description: 'Voucher category' })
  readonly voucher: VoucherCategory;
}
