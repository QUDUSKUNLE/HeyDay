import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Currency } from './common.entity';
import { Employee } from './employee.entity';

@ObjectType()
@Entity()
export class Company extends BaseEntity {
  @Field(() => Int, { description: 'Company id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'Company name' })
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  name: string;

  @Field({ description: 'Company address' })
  @Column({ type: 'text' })
  address: string;

  @Field({ description: 'Company title' })
  @Column({ type: 'varchar', length: 100, nullable: false })
  title: string;

  @Field(() => [Employee], { description: 'Employee id', nullable: true })
  @OneToMany(() => Employee, (employee) => employee.company)
  @JoinColumn({ name: 'employee_id' })
  employees?: Employee[];

  @Field(() => Float, { description: 'Tax rate' })
  @Column({ type: 'float', nullable: false, default: 30.0 })
  tax: number;

  @Field({ description: 'Company currency' })
  @Column({ type: 'enum', enum: Currency, default: Currency.EUR })
  currency: Currency;

  @Field(() => Float, { description: 'Company revenue' })
  @Column({ type: 'float', nullable: false })
  revenue: number;

  @Field(() => Float, { description: 'Company budget' })
  @Column({ type: 'float', nullable: false })
  budget: number;

  @Field({ description: 'Date company joined' })
  @Column({ type: 'datetime' })
  @CreateDateColumn()
  createdAt: Date;

  @Field({ description: 'Date company is updated' })
  @Column({ type: 'datetime' })
  @UpdateDateColumn()
  updatedAt: Date;
}
