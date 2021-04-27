import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private orderModel: Model<UserDocument>) {}

  async getAll(): Promise<User[]>  {
    return this.orderModel.find().exec();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdOrder = new this.orderModel(createUserDto);
    return createdOrder.save();
  }
}
