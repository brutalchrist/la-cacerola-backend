import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from 'src/services/user/dto/create-user.dto';
import { UserService } from 'src/services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto);
  }
}
