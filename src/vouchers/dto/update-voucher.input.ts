import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { Currency, Category } from '../../entities/common.entity';

@InputType()
export class UpdateVoucher {
  @Field(() => Int, { description: 'Voucher id' })
  readonly id: number;

  @Field(() => Float, { description: 'Voucher cost' })
  cost: number;

  @Field({ description: 'Voucher name' })
  name: string;

  @Field({ description: 'Voucher currency' })
  currency: Currency;

  @Field({ description: 'Voucher category' })
  category: Category;
}
