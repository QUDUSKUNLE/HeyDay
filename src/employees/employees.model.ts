import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { CompanyModel } from '../companies/companies.model';

@ObjectType()
@Entity()
export class EmployeeModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 500, nullable: false })
  name: string;

  @Field(() => CompanyModel, { nullable: true })
  @OneToOne(() => CompanyModel, (company) => company.id)
  companyId: CompanyModel;

  @Field()
  @Column()
  amountSpent: number;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
