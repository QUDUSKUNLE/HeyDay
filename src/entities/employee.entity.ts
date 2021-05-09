import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { Company } from './company.entity';
import { Order } from './order.entity';

@ObjectType()
@Entity()
export class Employee extends BaseEntity {
  @Field(() => Int, { description: 'An employee id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'An employee name' })
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  name: string;

  @Field(() => Company, {
    description: 'Relations with companies',
    nullable: true,
  })
  @ManyToOne(() => Company, (company) => company.id)
  @JoinColumn({ name: 'company_id' })
  company?: Company;

  @Field(() => [Order], {
    description: 'Relations with orders',
    nullable: true,
  })
  @OneToMany(() => Order, (order) => order.employee, { cascade: true })
  @JoinColumn({ name: 'order_id' })
  orders?: Order[];

  @Field(() => Float, { description: 'Amount an employee spent' })
  @Column({ type: 'float' })
  amountSpent: number;

  @Field({ description: 'Date an employee joined' })
  @Column({ type: 'datetime' })
  @CreateDateColumn()
  createdAt: Date;

  @Field({ description: 'Date an employee updated' })
  @Column({ type: 'datetime' })
  @UpdateDateColumn()
  updatedAt: Date;
}
