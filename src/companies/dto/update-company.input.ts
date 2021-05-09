import { InputType, Field, Int } from '@nestjs/graphql';
import { Currency } from '../../entities/common.entity';

@InputType()
export class UpdateCompany {
  @Field(() => Int, { description: 'Company id' })
  readonly id: number;

  @Field({ description: 'Company name' })
  readonly name: string;

  @Field({ description: 'Company address' })
  readonly address: string;

  @Field({ description: 'Company title' })
  readonly title?: string;

  @Field({ description: 'Company currency' })
  readonly currency: Currency;

  @Field(() => Int, { description: 'Company revenue' })
  readonly revenue: number;

  @Field(() => Int, { description: 'Amount budgted for an employee' })
  readonly budget: number;
}
