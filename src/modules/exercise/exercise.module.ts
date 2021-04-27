import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExerciseSchema, Exercise } from 'src/schemas/exercise.schema';
import { ExerciseServiceModule } from 'src/services/exercise/exercise-service.module';
import { ExerciseController } from './exercise.controller';

@Module({
  imports: [
    ExerciseServiceModule,
    MongooseModule.forFeature([{ name: Exercise.name, schema: ExerciseSchema }])
  ],
  controllers: [ExerciseController],
})
export class ExerciseModule {}