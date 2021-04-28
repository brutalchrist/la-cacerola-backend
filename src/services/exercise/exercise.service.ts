import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exercise, ExerciseDocument } from 'src/schemas/exercise.schema';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Injectable()
export class ExerciseService {
  constructor(@InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>) {}

  async getAll(): Promise<Exercise[]>  {
    return this.exerciseModel.find().exec();
  }

  async create(createExerciseServiceDto: CreateExerciseDto): Promise<Exercise> {
    const createdExercise = new this.exerciseModel(createExerciseServiceDto);
    return createdExercise.save();
  }
}
