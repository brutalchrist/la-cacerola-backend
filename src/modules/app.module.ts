import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrderServiceModule } from 'src/services/order/order-service.module';
import { OrderController } from './order/order.controller';

@Module({
  imports: [ConfigModule.forRoot(), OrderServiceModule],
  controllers: [OrderController],
  providers: [],
})
export class AppModule {}
