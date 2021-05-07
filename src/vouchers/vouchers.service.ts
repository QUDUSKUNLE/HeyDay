import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

import { CreateVoucher } from './dto/create-voucher.input';
import { UpdateVoucher } from './dto/update-voucher.input';
import { Voucher } from '../entities/voucher.entity';

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
    return await this.voucherRepository.find();
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async findOne(id: number): Promise<Voucher | string> {
    const voucher = await this.voucherRepository.findOne(id);
    if (!voucher) return 'Voucher does not exit';
    return voucher;
  }

  /**
   * @param  {number} id
   * @param  {UpdateVoucher} updateVoucher
   * @returns Promise
   */
  async update(
    id: number,
    updateVoucher: UpdateVoucher,
  ): Promise<Voucher | string> {
    const voucher = await this.findOne(id);
    if (voucher && typeof voucher === 'string') return 'Voucher does not exist';
    await this.voucherRepository.update(id, updateVoucher);
    return await this.voucherRepository.findOne(id);
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async remove(id: number): Promise<DeleteResult> {
    return await this.voucherRepository.delete(id);
  }
}
