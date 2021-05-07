import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Currency } from './common.entity';

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
  created_at: Date;

  @Field({ description: 'Date company is updated' })
  @Column({ type: 'datetime' })
  @UpdateDateColumn()
  updated_at: Date;
}
