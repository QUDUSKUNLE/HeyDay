import { InputType, Field, Float } from '@nestjs/graphql';
import { Currency } from '../../entities/common.entity';

@InputType()
export class CreateCompany {
  @Field({ description: 'Company name' })
  readonly name: string;

  @Field({ description: 'Company address' })
  readonly address: string;

  @Field({ description: 'Company title' })
  readonly title: string;

  @Field({ description: 'Company currency' })
  readonly currency: Currency;

  @Field(() => Float, { description: 'Company revenue' })
  readonly revenue: number;

  @Field(() => Float, { description: 'Amount budgted for an employee' })
  readonly budget: number;
}
