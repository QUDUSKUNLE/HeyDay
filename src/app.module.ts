import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { Company } from './entities/company.entity';
import { CompaniesModule } from './companies/companies.module';
import { CompaniesResolver } from './companies/companies.resolver';
import { CompaniesService } from './companies/companies.service';

import { Employee } from './entities/employee.entity';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesResolver } from './employees/employees.resolver';
import { EmployeesService } from './employees/employees.service';

import { Voucher } from './entities/voucher.entity';
import { VouchersModule } from './vouchers/vouchers.module';
import { VouchersResolver } from './vouchers/vouchers.resolver';
import { VouchersService } from './vouchers/vouchers.service';

import { Order } from './entities/order.entity';
import { OrdersModule } from './orders/orders.module';
import { OrdersResolver } from './orders/orders.resolver';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as any,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT as any,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Company, Employee, Voucher, Order],
      synchronize: true,
    }),
    CompaniesModule,
    EmployeesModule,
    VouchersModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [
    CompaniesResolver,
    EmployeesResolver,
    VouchersResolver,
    OrdersResolver,
    CompaniesService,
    EmployeesService,
    VouchersService,
    OrdersService,
  ],
})
export class AppModule {}
