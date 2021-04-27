import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), OrderModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
