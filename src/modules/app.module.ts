import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExerciseModule } from './exercise/exercise.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), OrderModule, UserModule, ExerciseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
