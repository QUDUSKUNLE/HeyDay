import { InputType, Float, Field } from '@nestjs/graphql';
import { CreateCompany } from '../../companies/dto/create-company.input';

@InputType()
export class CreateEmployee {
  @Field()
  readonly name: string;

  @Field(() => CreateCompany)
  readonly company: CreateCompany;

  @Field(() => Float, { description: 'Amount spent on voucher' })
  readonly amount_spent: number;
}
