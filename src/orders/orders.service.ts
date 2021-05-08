import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, DeepPartial, getRepository } from 'typeorm';

import { Order } from '../entities/order.entity';
import { Employee } from '../entities/employee.entity';
import { Voucher } from '../entities/voucher.entity';
import { CreateOrder } from './dto/create-order.input';
import { UpdateOrder } from './dto/update-order.input';

@Injectable()
export class OrdersService {
  /**
   * @param  {} @InjectRepository(Order
   * @param  {Repository<Order>} privateorderRepository
   */
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(Voucher)
    private voucherRepository: Repository<Voucher>,
  ) {}

  /**
   * @param  {CreateOrder} createOrder
   * @returns Promise
   */
  async create(createOrder: CreateOrder): Promise<Order> {
    const employee:
      | DeepPartial<Employee>
      | number = await this.employeeRepository.findOne(createOrder.employee);
    const voucher:
      | DeepPartial<Voucher>
      | number = await this.voucherRepository.findOne(createOrder.voucher, {
      relations: ['orders'],
    });
    // await this.
    const order: DeepPartial<Order> = await this.orderRepository.save({
      ...createOrder,
      employee,
      voucher,
    });

    // voucher.orders = [{ id, orderedAt, createdAt, updatedAt }];
    await this.voucherRepository.save(voucher);
    return await this.orderRepository.findOneOrFail(order.id, {
      relations: ['vouchers', 'employee'],
    });
  }

  /**
   * @returns Promise
   */
  async findAll(): Promise<Order[] | DeepPartial<Order>[]> {
    return await this.orderRepository.find({
      relations: ['vouchers', 'employee'],
    });
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async findOne(id: number): Promise<Order | DeepPartial<Order>> {
    return await this.orderRepository.findOneOrFail(id, {
      relations: ['vouchers', 'employee'],
    });
  }

  /**
   * @param  {number} id
   * @param  {UpdateOrder} updateOrder
   * @returns Promise
   */
  async update(
    id: number,
    updateOrder: UpdateOrder,
  ): Promise<Order | DeepPartial<Order>> {
    const employee = await this.employeeRepository.findOne(
      updateOrder.employee,
    );
    const voucher = await this.voucherRepository.findOne(updateOrder.voucher);
    await this.orderRepository.update(id, {
      ...updateOrder,
      employee,
      voucher,
    } as any);
    return await this.orderRepository.findOne(id);
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async remove(id: number): Promise<DeleteResult> {
    return await this.orderRepository.delete(id);
  }
}
