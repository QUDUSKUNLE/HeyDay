import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeleteResult } from 'typeorm';

import { VouchersService } from './vouchers.service';
import { Voucher } from '../entities/voucher.entity';
import { CreateVoucher } from './dto/create-voucher.input';
import { UpdateVoucher } from './dto/update-voucher.input';

@Resolver(() => Voucher)
export class VouchersResolver {
  /**
   * @param  {VouchersService} privatereadonlyvouchersService
   */
  constructor(private readonly vouchersService: VouchersService) {}

  /**
   * @param  {} (
   * @param  {} =>Voucher
   * @param  {} createVoucher(@Args('createVoucher'
   * @param  {CreateVoucher} createVoucher
   * @returns Promise
   */
  @Mutation(() => Voucher)
  createVoucher(
    @Args('createVoucher') createVoucher: CreateVoucher,
  ): Promise<Voucher> {
    return this.vouchersService.create(createVoucher);
  }

  /**
   * @param  {} (
   * @param  {} =>[Voucher]
   * @param  {'vouchers'}} {name
   * @returns Promise
   */
  @Query(() => [Voucher], { name: 'vouchers' })
  findAll(): Promise<Voucher[]> {
    return this.vouchersService.findAll();
  }

  /**
   * @param  {} (
   * @param  {} =>Voucher
   * @param  {'voucher'}} {name
   * @returns Promise
   */
  @Query(() => Voucher, { name: 'voucher' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Voucher | string> {
    return this.vouchersService.findOne(id);
  }

  /**
   * @param  {} (
   * @param  {} =>Voucher
   * @param  {} updateVoucher(@Args('updateVoucher'
   * @param  {UpdateVoucher} updateVoucher
   * @returns Promise
   */
  @Mutation(() => Voucher)
  updateVoucher(
    @Args('updateVoucher') updateVoucher: UpdateVoucher,
  ): Promise<Voucher | string> {
    return this.vouchersService.update(updateVoucher.id, updateVoucher);
  }

  /**
   * @param  {} (
   * @param  {} =>Voucher
   * @param  {} removeVoucher(@Args('id'
   * @param  {()=>Int}} {type
   * @returns Promise
   */
  @Mutation(() => Voucher)
  removeVoucher(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<DeleteResult> {
    return this.vouchersService.remove(id);
  }
}
