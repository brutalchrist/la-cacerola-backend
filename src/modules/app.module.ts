import { Module } from '@nestjs/common';
import { OrderServiceModule } from 'src/services/order/order-service.module';
import { OrderController } from './order/order.controller';

@Module({
  imports: [OrderServiceModule],
  controllers: [OrderController],
  providers: [],
})
export class AppModule {}
