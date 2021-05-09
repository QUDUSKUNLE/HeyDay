import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { Employee } from '../entities/employee.entity';
import { Company } from '../entities/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Company])],
  exports: [TypeOrmModule],
  providers: [EmployeesResolver, EmployeesService],
})
export class EmployeesModule {}
