import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

import { CompaniesModule } from './companies/companies.module';
import { CompaniesResolver } from './companies/companies.resolver';
import { CompaniesService } from './companies/companies.service';
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
      synchronize: false,
    }),
    CompaniesModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CompaniesResolver,
    EmployeesResolver,
    CompaniesService,
    EmployeesService,
  ],
})
export class AppModule {}
