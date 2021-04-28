import { Body, Controller, Get, Post } from '@nestjs/common';
import { Exercise } from 'src/schemas/exercise.schema';
import { CreateExerciseDto } from 'src/services/exercise/dto/create-exercise.dto';
import { ExerciseService } from 'src/services/exercise/exercise.service';

@Controller('exercises')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  getAll(): Promise<Exercise[]> {
    return this.exerciseService.getAll();
  }

  @Post()
  async create(@Body() createExerciseDto: CreateExerciseDto) {
    await this.exerciseService.create(createExerciseDto);
  }
}
