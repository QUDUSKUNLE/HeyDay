import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class CompanyModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 500, nullable: false })
  name: string;

  @Field()
  @Column('text')
  address: string;

  @Field()
  @Column({ length: 500, nullable: false })
  title: string;

  @Field()
  @Column({ nullable: false })
  revenue: number;

  @Field()
  @Column({ nullable: false })
  budget: number;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
