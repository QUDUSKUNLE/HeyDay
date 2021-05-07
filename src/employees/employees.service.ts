import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateEmployee } from './dto/create-employee.input';
import { UpdateEmployee } from './dto/update-employee.input';
import { Employee } from '../entities/employee.entity';

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
  async create(createEmployee: CreateEmployee) {
    try {
      const employee = await this.employeeRepository.save(createEmployee);
      return employee;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @returns Promise
   */
  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  /**
   * @param  {string} id
   * @returns Promise
   */
  async findOne(id: string): Promise<Employee | string> {
    const employee = await this.employeeRepository.findOneOrFail(id);
    if (!employee.id) return 'Employee does not exist';
    return employee;
  }

  /**
   * @param  {string} id
   * @param  {Employees} updateEmployee
   * @returns Promise
   */
  async update(
    id: string,
    updateEmployee: UpdateEmployee,
  ): Promise<Employee | string> {
    const employee = await this.employeeRepository.findOne(id);
    if (!employee.id) return 'Employee does not exist';
    await this.employeeRepository.update(id, updateEmployee);
    return await this.employeeRepository.findOne(id);
  }

  /**
   * @param  {string} id
   * @returns Promise
   */
  async remove(id: string): Promise<DeleteResult> {
    return await this.employeeRepository.delete(id);
  }
}
