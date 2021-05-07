import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateEmployee } from './dto/create-employee.input';
import { UpdateEmployee } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {

  /**
   * @param  {} @InjectRepository(Employee
   * @param  {Repository<Employee>} privateemployeeRepository
   */
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  /**
   * @param  {CreateEmployeeInput} createEmployee
   */
  create(createEmployee: CreateEmployee) {
    return this.employeeRepository.insert(createEmployee);
  }

  /**
   * @returns Promise
   */
  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async findOne(id: number): Promise<Employee | string> {
    const employee = await this.employeeRepository.findOneOrFail(id);
    if (!employee.id) return 'Employee does not exist';
    return employee;
  }

  /**
   * @param  {number} id
   * @param  {Employees} updateEmployee
   * @returns Promise
   */
  async update(
    id: number,
    updateEmployee: UpdateEmployee,
  ): Promise<Employee | string> {
    const employee = await this.employeeRepository.findOne(id);
    if (!employee.id) return 'Employee does not exist';
    await this.employeeRepository.update(id, updateEmployee);
    return await this.employeeRepository.findOne(id);
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async remove(id: number): Promise<DeleteResult> {
    return await this.employeeRepository.delete(id);
  }
}
