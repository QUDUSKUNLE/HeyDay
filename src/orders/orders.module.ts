import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Order } from '../entities/order.entity';
import { Employee } from '../entities/employee.entity';
import { Voucher } from '../entities/voucher.entity';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Employee, Voucher])],
  exports: [TypeOrmModule],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
