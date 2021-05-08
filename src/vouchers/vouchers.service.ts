import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

import { CreateVoucher } from './dto/create-voucher.input';
import { UpdateVoucher } from './dto/update-voucher.input';
import { Voucher } from '../entities/voucher.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class VouchersService {
  /**
   * @param  {} @InjectRepository(Voucher
   * @param  {Repository<Voucher>} privatevoucherRepository
   */
  constructor(
    @InjectRepository(Voucher)
    private voucherRepository: Repository<Voucher>,
  ) {}

  /**
   * @param  {CreateVoucher} createVoucher
   * @returns Promise
   */
  async create(createVoucher: CreateVoucher): Promise<Voucher> {
    return await this.voucherRepository.save(createVoucher);
  }

  /**
   * @returns Promise
   */
  async findAll(): Promise<Voucher[]> {
    return await this.voucherRepository.find({ relations: ['orders'] });
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async findOne(id: number): Promise<Voucher> {
    return await this.voucherRepository.findOneOrFail(id, {
      relations: ['orders'],
    });
  }

  /**
   * @param  {number} id
   * @param  {UpdateVoucher} updateVoucher
   * @returns Promise
   */
  async update(id: number, updateVoucher: UpdateVoucher): Promise<Voucher> {
    const voucher:
      | UpdateVoucher
      | QueryDeepPartialEntity<Voucher> = await this.voucherRepository.findOne(
      id,
    );
    await this.voucherRepository.update(id, { ...voucher, ...updateVoucher });
    return await this.voucherRepository.findOneOrFail(id, {
      relations: ['orders'],
    });
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async remove(id: number): Promise<DeleteResult> {
    return await this.voucherRepository.delete(id);
  }
}
