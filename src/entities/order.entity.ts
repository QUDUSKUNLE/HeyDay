import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToMany,
} from 'typeorm';
import { Employee } from './employee.entity';
import { Voucher } from './voucher.entity';

@ObjectType()
@Entity()
export class Order extends BaseEntity {
  @Field(() => Int, { description: 'Order id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'Order date' })
  @Column({ type: 'datetime' })
  @CreateDateColumn()
  order_at: Date;

  @Field({ description: 'Order created' })
  @Column({ type: 'datetime' })
  @CreateDateColumn()
  created_at: Date;

  @Field(() => [Employee], { description: 'Employee id' })
  @ManyToMany(() => Employee, (employee) => employee.id, { primary: true })
  employee: Employee[];

  @Field(() => [Voucher], { description: 'Voucher id' })
  @ManyToMany(() => Voucher, (voucher) => voucher.id, { primary: true })
  voucher: Voucher[];

  @Field({ description: 'Date order updated' })
  @Column({ type: 'datetime' })
  @UpdateDateColumn()
  updated_at: Date;
}
