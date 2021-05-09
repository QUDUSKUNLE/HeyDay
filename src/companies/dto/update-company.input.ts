import { InputType, Field, Int } from '@nestjs/graphql';
import { Currency } from '../../entities/common.entity';

@InputType()
export class UpdateCompany {
  @Field(() => Int, { description: 'Company id' })
  readonly id: number;

  @Field({ description: 'Company name' })
  name?: string;

  @Field({ description: 'Company address' })
  address?: string;

  @Field({ description: 'Company title' })
  title?: string;

  @Field({ description: 'Company currency' })
  currency?: Currency;

  @Field(() => Int, { description: 'Company revenue' })
  revenue?: number;

  @Field(() => Int, { description: 'Amount budgted for an employee' })
  budget?: number;
}
