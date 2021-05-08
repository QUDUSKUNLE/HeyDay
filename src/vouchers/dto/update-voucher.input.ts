import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { Currency, Category } from '../../entities/common.entity';

@InputType()
export class UpdateVoucher {
  @Field(() => Int, { description: 'Voucher id' })
  readonly id: number;

  @Field(() => Float, { description: 'Voucher cost' })
  readonly cost: number;

  @Field({ description: 'Voucher name' })
  readonly name: string;

  @Field({ description: 'Voucher currency' })
  readonly currency: Currency;

  @Field({ description: 'Voucher category' })
  readonly category: Category;
}
