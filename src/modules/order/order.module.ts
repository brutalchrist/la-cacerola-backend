import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/schemas/order.schema';
import { OrderServiceModule } from 'src/services/order/order-service.module';
import { OrderController } from './order.controller';

@Module({
  imports: [
    OrderServiceModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])
  ],
  controllers: [OrderController],
})
export class OrderModule {}