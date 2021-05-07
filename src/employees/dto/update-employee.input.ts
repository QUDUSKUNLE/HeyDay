import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { CreateCompany }  from '../../companies/dto/create-company.input';

@InputType()
export class UpdateEmployee {
  @Field(() => Int, { description: 'Employee id' })
  readonly id: number;

  @Field()
  readonly name: string;

  @Field()
  readonly company: CreateCompany;

  @Field(() => Float, { description: 'Amount spent on voucher' })
  readonly amount_spent: number;
}
