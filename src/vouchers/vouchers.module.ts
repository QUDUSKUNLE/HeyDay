import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VouchersService } from './vouchers.service';
import { VouchersResolver } from './vouchers.resolver';
import { Voucher } from '../entities/voucher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voucher])],
  exports: [TypeOrmModule],
  providers: [VouchersResolver, VouchersService],
})
export class VouchersModule {}
