import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
// import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrderServiceModule {}
