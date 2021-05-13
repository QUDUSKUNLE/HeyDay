import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DeepPartial, DeleteResult } from 'typeorm';

import { EmployeesService } from './employees.service';
import { Employee } from '../entities/employee.entity';
import { CreateEmployee } from './dto/create-employee.input';
import { UpdateEmployee } from './dto/update-employee.input';

@Resolver(() => Employee)
export class EmployeesResolver {
  /**
   * @param  {EmployeesService} privatereadonlyemployeesService
   */
  constructor(private readonly employeesService: EmployeesService) {}

  /**
   * @param  {} (
   * @param  {} =>Employee
   * @param  {} createEmployee(@Args('createEmployeeInput'
   * @param  {CreateEmployee} createEmployee
   * @returns Promise
   */
  @Mutation(() => Employee)
  createEmployee(
    @Args('createEmployeeInput') createEmployee: CreateEmployee,
  ): Promise<Employee> {
    return this.employeesService.create(createEmployee);
  }

  /**
   * @param  {} (
   * @param  {} =>[Employee]
   * @param  {'employees'}} {name
   * @returns Promise
   */
  @Query(() => [Employee], { name: 'employees', nullable: true })
  async findAll(): Promise<Employee[]> {
    return await this.employeesService.findAll();
  }

  /**
   * @param  {} (
   * @param  {} =>Employee
   * @param  {'employee'}} {name
   * @returns Promise
   */
  @Query(() => Employee, { name: 'employee', nullable: true })
  findOne(@Args('id') id: number): Promise<Employee | DeepPartial<Employee>> {
    return this.employeesService.findOne(id);
  }

  /**
   * @param  {} (
   * @param  {} =>Employee
   * @param  {} updateEmployee(@Args('updateEmployeeInput'
   * @param  {UpdateEmployee} updateEmployee
   * @returns Promise
   */
  @Mutation(() => Employee)
  async updateEmployee(
    @Args('updateEmployeeInput') updateEmployee: UpdateEmployee,
  ): Promise<Employee> {
    return this.employeesService.update(updateEmployee.id, updateEmployee);
  }

  /**
   * @param  {} (
   * @param  {} =>Employee
   * @param  {} removeEmployee(@Args('id'
   * @param  {number} id
   * @returns Promise
   */
  @Mutation(() => Employee)
  removeEmployee(@Args('id') id: number): Promise<DeleteResult> {
    return this.employeesService.remove(id);
  }
}
