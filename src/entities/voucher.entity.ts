import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToMany,
} from 'typeorm';
import { Currency, Category } from './common.entity';
import { Order } from './order.entity';

@ObjectType()
@Entity()
export class Voucher extends BaseEntity {
  @Field(() => Int, { description: 'Voucher id' })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => Float, { description: 'Voucher cost' })
  @Column({ type: 'float', nullable: false })
  cost?: number;

  @Field({ description: 'Voucher category' })
  @Column({ type: 'enum', enum: Category, default: Category.SMALL })
  category?: Category;

  @Field({ description: 'Voucher name' })
  @Column({ type: 'varchar', nullable: false, unique: true })
  name?: string;

  @Field(() => [Order], { description: 'Vouchers ordered' })
  @ManyToMany(() => Order, (order) => order.vouchers)
  orders: Order[];

  @Field({ description: 'Voucher currency' })
  @Column({ type: 'enum', enum: Currency, default: Currency.EUR })
  currency?: Currency;

  @Field({ description: 'Date voucher is created' })
  @Column({ type: 'datetime' })
  @CreateDateColumn()
  createdAt: Date;

  @Field({ description: 'Date voucher is updated' })
  @Column({ type: 'datetime' })
  @UpdateDateColumn()
  updatedAt: Date;
}
