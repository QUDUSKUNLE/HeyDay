import { Injectable } from '@nestjs/common';
import { CreateOrder } from './dto/create-order.input';
import { UpdateOrder } from './dto/update-order.input';

@Injectable()
export class OrdersService {
  create(createOrder: CreateOrder) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrder: UpdateOrder) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
