import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';
import { Currency, VoucherCategory } from './common.entity';

@ObjectType()
@Entity()
export class Voucher extends BaseEntity {
  @Field(() => Int, { description: 'Voucher id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Float, { description: 'Voucher cost' })
  @Column({ type: 'float', nullable: false })
  cost: number;

  @Field({ description: 'Voucher currency' })
  @Column({ type: 'enum', enum: Currency, default: Currency.EUR })
  currency: Currency;

  @Field({ description: 'Voucher category' })
  @Column({ type: 'enum', enum: VoucherCategory, default: VoucherCategory.SML })
  voucher: VoucherCategory;

  @Field({ description: 'Date voucher is created' })
  @Column({ type: 'datetime' })
  @CreateDateColumn()
  createdAt: Date;

  @Field({ description: 'Date voucher is updated' })
  @Column({ type: 'datetime' })
  @UpdateDateColumn()
  updatedAt: Date;
}
