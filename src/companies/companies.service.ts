import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { Companies } from './interfaces/companies.interface';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {

  /**
   * @param  {} @InjectRepository(Company
   * @param  {Repository<Companies>} privatecompanyRepository
   */
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Companies>,
  ) {}

  /**
   * @param  {CreateCompanyInput} createCompanyInput
   */
  create(createCompanyInput: CreateCompanyInput) {
    return this.companyRepository.insert(createCompanyInput);
  }

  /**
   * @returns Promise
   */
  findAll(): Promise<Companies[]> {
    return this.companyRepository.find();
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async findOne(id: number): Promise<Companies | string> {
    const company = await this.companyRepository.findOneOrFail(id);
    if (!company.id) return 'Company does not exist';
    return company;
  }

  /**
   * @param  {number} id
   * @param  {UpdateCompanyInput} updateCompanyInput
   * @returns Promise
   */
  async update(
    id: number,
    updateCompanyInput: UpdateCompanyInput,
  ): Promise<Companies | string> {
    const company = await this.companyRepository.findOneOrFail(id);
    if (!company.id) return 'Company does not exist';
    await this.companyRepository.update(id, updateCompanyInput);
    return await this.companyRepository.findOne(id);
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async remove(id: number): Promise<DeleteResult> {
    return await this.companyRepository.delete(id);
  }
}
