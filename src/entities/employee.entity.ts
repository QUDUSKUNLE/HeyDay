import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  BaseEntity,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { Company } from './company.entity';

@ObjectType()
@Entity()
export class Employee extends BaseEntity {
  @Field(() => Int, { description: 'An employee id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'An employee name' })
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  name: string;

  @Field(() => Company, { description: 'Company id' })
  @ManyToOne(() => Company, (company) => company.id, { primary: true })
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @Field(() => Float, { description: 'Amount an employee spent' })
  @Column({ type: 'float' })
  amount_spent: number;

  @Field({ description: 'Date an employee joined' })
  @Column({ type: 'datetime' })
  @CreateDateColumn()
  created_at: Date;

  @Field({ description: 'Date an employee updated' })
  @Column({ type: 'datetime' })
  @UpdateDateColumn()
  updated_at: Date;
}
