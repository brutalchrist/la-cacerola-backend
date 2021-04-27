import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/schemas/order.schema';
import { UserServiceModule } from 'src/services/user/user-service.module';
import { UserController } from './user.controller';

@Module({
  imports: [
    UserServiceModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])
  ],
  controllers: [UserController],
})
export class UserModule {}