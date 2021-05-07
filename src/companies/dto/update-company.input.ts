import { CreateCompany } from './create-company.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCompany extends PartialType(CreateCompany) {
  @Field()
  readonly id: number;

  @Field()
  readonly name: string;

  @Field()
  readonly address: string;

  @Field()
  readonly title: string;

  @Field(() => Int, { description: 'Company revenue' })
  readonly revenue: number;

  @Field(() => Int, { description: 'Amount budgted for an employee' })
  readonly budget: number;
}
