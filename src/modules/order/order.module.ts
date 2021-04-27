import { Module } from '@nestjs/common';
import { OrderServiceModule } from 'src/services/order/order-service.module';
import { OrderController } from './order.controller';

@Module({
  imports: [OrderServiceModule],
  controllers: [OrderController],
})
export class OrderModule {}