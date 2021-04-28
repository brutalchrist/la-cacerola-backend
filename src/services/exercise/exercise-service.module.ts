import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Exercise, ExerciseSchema } from 'src/schemas/exercise.schema';
import { ExerciseService } from './exercise.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL')
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Exercise.name, schema: ExerciseSchema }])
  ],
  providers: [ExerciseService],
  exports: [ExerciseService]
})
export class ExerciseServiceModule {}
