import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Employee } from '../entities/employee.entity';
import { CreateEmployee } from './dto/create-employee.input';
import { UpdateEmployee } from './dto/update-employee.input';

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) {}

  @Mutation(() => Employee)
  createEmployee(@Args('createEmployee') createEmployee: CreateEmployee) {
    return this.employeesService.create(createEmployee);
  }

  @Query(() => [Employee], { name: 'employees' })
  findAll() {
    return this.employeesService.findAll();
  }

  @Query(() => Employee, { name: 'employee' })
  findOne(@Args('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Mutation(() => Employee)
  updateEmployee(@Args('updateEmployee') updateEmployee: UpdateEmployee) {
    return this.employeesService.update(updateEmployee.id, updateEmployee);
  }

  @Mutation(() => Employee)
  removeEmployee(@Args('id') id: string) {
    return this.employeesService.remove(id);
  }
}
