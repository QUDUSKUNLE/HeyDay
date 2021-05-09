import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, DeepPartial } from 'typeorm';

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
  async create(createOrder: CreateOrder): Promise<Order[]> {
    const employee:
      | DeepPartial<Employee>
      | number = await this.employeeRepository.findOne(createOrder.employee);
    const voucher:
      | DeepPartial<Voucher>
      | number = await this.voucherRepository.findOne(createOrder.vouchers, {
      relations: ['orders'],
    });

    console.log(voucher, 'old voucher');
    const order = await this.orderRepository.save({
      employee,
      vouchers: [voucher],
    });
    const newOrder = new Order();
    const { id, createdAt, orderedAt, updatedAt } = order;
    newOrder.id = id;
    newOrder.createdAt = createdAt;
    newOrder.orderedAt = orderedAt;
    newOrder.updatedAt = updatedAt;
    voucher.orders.push(newOrder);
    console.log(voucher, 'New voucher');
    await this.voucherRepository.save(voucher);
    return await this.orderRepository.find({ relations: ['vouchers'] });
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
    const vouchers = await this.voucherRepository.findOne(updateOrder.vouchers);
    await this.orderRepository.update(id, {
      ...updateOrder,
      employee,
      vouchers,
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
