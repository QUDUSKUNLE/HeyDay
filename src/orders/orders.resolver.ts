import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeleteResult, DeepPartial } from 'typeorm';

import { Order } from '../entities/order.entity';
import { OrdersService } from './orders.service';
import { CreateOrder } from './dto/create-order.input';
import { UpdateOrder } from './dto/update-order.input';

@Resolver(() => Order)
export class OrdersResolver {
  /**
   * @param  {OrdersService} privatereadonlyordersService
   */
  constructor(private readonly ordersService: OrdersService) {}

  /**
   * @param  {} (
   * @param  {} =>Order
   * @param  {} createOrder(@Args('createOrderInput'
   * @param  {CreateOrder} createOrder
   * @returns Promise
   */
  @Mutation(() => Order)
  createOrder(
    @Args('createOrderInput') createOrder: CreateOrder,
  ): Promise<Order> {
    return this.ordersService.create(createOrder);
  }

  /**
   * @param  {} (
   * @param  {} =>[Order]
   * @param  {'orders'}} {name
   * @returns Promise
   */
  @Query(() => [Order], { name: 'orders' })
  findAll(): Promise<Order[] | DeepPartial<Order>[]> {
    return this.ordersService.findAll();
  }

  /**
   * @param  {} (
   * @param  {} =>Order
   * @param  {'order'}} {name
   * @returns Promise
   */
  @Query(() => Order, { name: 'order' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Order | DeepPartial<Order>> {
    return this.ordersService.findOne(id);
  }

  /**
   * @param  {} (
   * @param  {} =>Order
   * @param  {} updateOrder(@Args('updateOrderInput'
   * @param  {UpdateOrder} updateOrder
   * @returns Promise
   */
  @Mutation(() => Order)
  updateOrder(
    @Args('updateOrderInput') updateOrder: UpdateOrder,
  ): Promise<Order | DeepPartial<Order>> {
    return this.ordersService.update(updateOrder.id, updateOrder);
  }

  /**
   * @param  {} (
   * @param  {} =>Order
   * @param  {} removeOrder(@Args('id'
   * @param  {()=>Int}} {type
   * @returns Promise
   */
  @Mutation(() => Order)
  removeOrder(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<DeleteResult> {
    return this.ordersService.remove(id);
  }
}
