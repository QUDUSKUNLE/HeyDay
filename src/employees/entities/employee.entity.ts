import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Company } from '../../companies/entities/company.entity';

@ObjectType()
@Entity()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 500, nullable: false })
  name: string;

  @Field()
  @ManyToOne(() => Company, (company) => company.id)
  company: Company;

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
