import { Injectable } from '@nestjs/common';
import { CreateVoucher } from './dto/create-voucher.input';
import { UpdateVoucher } from './dto/update-voucher.input';

@Injectable()
export class VouchersService {
  create(createVoucher: CreateVoucher) {
    return 'This action adds a new voucher';
  }

  findAll() {
    return `This action returns all vouchers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voucher`;
  }

  update(id: number, updateVoucher: UpdateVoucher) {
    return `This action updates a #${id} voucher`;
  }

  remove(id: number) {
    return `This action removes a #${id} voucher`;
  }
}
