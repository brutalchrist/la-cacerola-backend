import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { UserServiceModule } from 'src/services/user/user-service.module';
import { UserController } from './user.controller';

@Module({
  imports: [
    UserServiceModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UserController],
})
export class UserModule {}