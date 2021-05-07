import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DeleteResult } from 'typeorm';
import { CompaniesService } from './companies.service';
import { Company } from '../entities/company.entity';
import { CreateCompany } from './dto/create-company.input';
import { UpdateCompany } from './dto/update-company.input';

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(private readonly companiesService: CompaniesService) {}

  @Mutation(() => Company)
  createCompany(@Args('createCompany') createCompany: CreateCompany) {
    return this.companiesService.create(createCompany);
  }

  @Query(() => [Company], { name: 'companies' })
  createCompanyfindAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }

  @Query(() => Company, { name: 'company' })
  findOne(@Args('id') id: number): Promise<Company | string> {
    return this.companiesService.findOne(id);
  }

  @Mutation(() => Company)
  updateCompany(@Args('updateCompany') updateCompany: UpdateCompany) {
    return this.companiesService.update(updateCompany.id, updateCompany);
  }

  @Mutation(() => Company)
  removeCompany(@Args('id') id: number): Promise<DeleteResult> {
    return this.companiesService.remove(id);
  }
}
