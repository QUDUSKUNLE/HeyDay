import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, DeepPartial } from 'typeorm';
import { CreateEmployee } from './dto/create-employee.input';
import { UpdateEmployee } from './dto/update-employee.input';
import { Employee } from '../entities/employee.entity';
import { Company } from '../entities/company.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class EmployeesService {
  /**
   * @param  {} @InjectRepository(Employee
   * @param  {Repository<Employee>} privateemployeeRepository
   */
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  /**
   * @param  {CreateEmployee} createEmployee
   */
  async create(createEmployee: CreateEmployee) {
    const company: DeepPartial<Company> = await this.companyRepository.findOne(
      createEmployee.company,
    );
    return await this.employeeRepository.save({
      ...createEmployee,
      company,
    } as any);
  }

  /**
   * @returns Promise
   */
  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find({ relations: ['company'] });
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async findOne(id: number): Promise<Employee | DeepPartial<Employee>> {
    return await this.employeeRepository.findOneOrFail(id);
  }

  /**
   * @param  {number} id
   * @param  {Employees} updateEmployee
   * @returns Promise
   */
  async update(id: number, updateEmployee: UpdateEmployee): Promise<Employee> {
    const company: QueryDeepPartialEntity<Company> = await this.companyRepository.findOne(
      updateEmployee.company,
    );
    await this.employeeRepository.update(id, {
      ...updateEmployee,
      company,
    } as any);
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
