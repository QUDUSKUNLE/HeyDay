import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateCompany }  from '../../companies/dto/create-company.input';

@InputType()
export class UpdateEmployee {
  @Field()
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly company: CreateCompany;

  @Field(() => Int, { description: 'Amount spent on voucher' })
  readonly amountSpent: number;
}
