import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

import { Order } from '../entities/order.entity';
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
  ) {}

  /**
   * @param  {CreateOrder} createOrder
   * @returns Promise
   */
  async create(createOrder: CreateOrder): Promise<Order> {
    return await this.orderRepository.save(createOrder);
  }

  /**
   * @returns Promise
   */
  async findAll(): Promise<Order[]> {
    return await this.orderRepository.find();
  }

  /**
   * @param  {number} id
   * @returns Promise
   */
  async findOne(id: number): Promise<Order | string> {
    const order = await this.orderRepository.findOne(id);
    if (!order) return 'Order does not exist';
    return order;
  }

  /**
   * @param  {number} id
   * @param  {UpdateOrder} updateOrder
   * @returns Promise
   */
  async update(id: number, updateOrder: UpdateOrder): Promise<Order | string> {
    const order = await this.findOne(id);
    if (order && typeof order === 'string') return 'Order does not exist';
    await this.orderRepository.update(id, updateOrder);
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
