import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DeleteResult } from 'typeorm';

import { CompaniesService } from './companies.service';
import { Company } from '../entities/company.entity';
import { CreateCompany } from './dto/create-company.input';
import { UpdateCompany } from './dto/update-company.input';

@Resolver(() => Company)
export class CompaniesResolver {
  /**
   * @param  {CompaniesService} privatereadonlycompaniesService
   */
  constructor(private readonly companiesService: CompaniesService) {}
  /**
   * @param  {} (
   * @param  {} =>Company
   * @param  {} createCompany(@Args('createCompanyInput'
   * @param  {CreateCompany} createCompany
   * @returns Promise
   */
  @Mutation(() => Company)
  createCompany(
    @Args('createCompanyInput') createCompany: CreateCompany,
  ): Promise<Company> {
    return this.companiesService.create(createCompany);
  }

  /**
   * @param  {} (
   * @param  {} =>[Company]
   * @param  {'companies'}} {name
   * @returns Promise
   */
  @Query(() => [Company], { name: 'companies', nullable: true })
  findAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }

  /**
   * @param  {} (
   * @param  {} =>Company
   * @param  {'company'}} {name
   * @returns Promise
   */
  @Query(() => Company, { name: 'company', nullable: true })
  findOne(@Args('id') id: number): Promise<Company> {
    return this.companiesService.findOne(id);
  }
  /**
   * @param  {} (
   * @param  {} =>Company
   * @param  {} updateCompany(@Args('updateCompany'
   * @param  {UpdateCompany} updateCompany
   * @returns Promise
   */
  @Mutation(() => Company)
  updateCompany(
    @Args('updateCompanyInput') updateCompany: UpdateCompany,
  ): Promise<Company | string> {
    return this.companiesService.update(updateCompany.id, updateCompany);
  }

  /**
   * @param  {} (
   * @param  {} =>Company
   * @param  {} removeCompany(@Args('id'
   * @param  {number} id
   * @returns Promise
   */
  @Mutation(() => Company)
  removeCompany(@Args('id') id: number): Promise<DeleteResult> {
    return this.companiesService.remove(id);
  }
}
