import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employees } from './interfaces/employees.interface';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {

  /**
   * @param  {} @InjectRepository(Employee
   * @param  {Repository<Employees>} privateemployeeRepository
   */
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employees>,
  ) {}

  /**
   * @param  {CreateEmployeeInput} createEmployeeInput
   */
  create(createEmployeeInput: CreateEmployeeInput) {
    return this.employeeRepository.insert(createEmployeeInput);
  }

  /**
   * @returns Promise
   */
  findAll(): Promise<Employees[]> {
    return this.employeeRepository.find();
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async findOne(id: number): Promise<Employees | string> {
    const employee = await this.employeeRepository.findOne(id);
    if (!employee.id) return 'Employee does not exist';
    return employee;
  }

  /**
   * @param  {number} id
   * @param  {UpdateEmployeeInput} updateEmployeeInput
   * @returns Promise
   */
  async update(
    id: number,
    updateEmployeeInput: UpdateEmployeeInput,
  ): Promise<Employees | string> {
    const employee = await this.employeeRepository.findOne(id);
    if (!employee.id) return 'Employee does not exist';
    await this.employeeRepository.update(id, updateEmployeeInput);
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
