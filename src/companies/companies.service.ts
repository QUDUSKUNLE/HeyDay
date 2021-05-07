import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateCompany } from './dto/create-company.input';
import { UpdateCompany } from './dto/update-company.input';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  /**
   * @param  {} @InjectRepository(Company
   * @param  {Repository<Companies>} privatecompanyRepository
   */
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  /**
   * @param  {CreateCompanyInput} createCompany
   */
  async create(createCompany: CreateCompany) {
    return await this.companyRepository.save(createCompany);
  }

  /**
   * @returns Promise
   */
  async findAll(): Promise<Company[]> {
    return await this.companyRepository.find();
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async findOne(id: number): Promise<Company | string> {
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
    updateCompany: UpdateCompany,
  ): Promise<Company | string> {
    const company = await this.companyRepository.findOneOrFail(id);
    if (!company.id) return 'Company does not exist';
    await this.companyRepository.update(id, updateCompany);
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
