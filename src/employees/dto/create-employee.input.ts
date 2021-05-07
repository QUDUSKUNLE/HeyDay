import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateCompany }  from '../../companies/dto/create-company.input';

@InputType()
export class CreateEmployee {
  @Field()
  readonly name: string;

  @Field()
  readonly company: CreateCompany;

  @Field(() => Int, { description: 'Amount spent on voucher' })
  readonly amountSpent: number;
}
