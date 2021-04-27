import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ConfigModule.forRoot(), OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
