import { InputType, Float, Field } from '@nestjs/graphql';
import { Currency, Category } from '../../entities/common.entity';

@InputType()
export class CreateVoucher {
  @Field(() => Float, { description: 'Voucher cost' })
  readonly cost: number;

  @Field({ description: 'Voucher name' })
  readonly name: string;

  @Field({ description: 'Voucher currency' })
  readonly currency: Currency;

  @Field({ description: 'Voucher category' })
  readonly category: Category;
}
