import { Body, Controller, Get, Post } from '@nestjs/common';
import { Order } from 'src/schemas/order.schema';
import { CreateOrderDto } from 'src/services/order/dto/create-order.dto';
import { OrderService } from 'src/services/order/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getAll(): Promise<Order[]> {
    return this.orderService.getAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateOrderDto) {
    await this.orderService.create(createCatDto);
  }
}
