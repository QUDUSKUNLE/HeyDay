import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
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
  orderedAt: Date;

  @Field({ description: 'Order created' })
  @Column({ type: 'datetime' })
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Employee, { description: 'Employee id' })
  @ManyToOne(() => Employee, (employee) => employee.id, { primary: true })
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Field(() => [Voucher], { description: 'List of vouchers' })
  @ManyToMany(() => Voucher, (voucher) => voucher.orders)
  @JoinTable({ name: 'vouchers_orders' })
  vouchers: Voucher[];

  @Field({ description: 'Date order updated' })
  @Column({ type: 'datetime' })
  @UpdateDateColumn()
  updatedAt: Date;
}
