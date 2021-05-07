import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Company } from './entities/company.entity';
import { CompaniesModule } from './companies/companies.module';
import { CompaniesResolver } from './companies/companies.resolver';
import { CompaniesService } from './companies/companies.service';

import { Employee } from './entities/employee.entity';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesResolver } from './employees/employees.resolver';
import { EmployeesService } from './employees/employees.service';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Boluwatife08971',
      database: 'heyday',
      entities: [Company, Employee],
      synchronize: true,
    }),
    CompaniesModule,
    EmployeesModule,
  ],
  controllers: [],
  providers: [
    CompaniesResolver,
    EmployeesResolver,
    CompaniesService,
    EmployeesService,
  ],
})
export class AppModule {}
