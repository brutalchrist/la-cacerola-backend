import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from 'src/services/user/user.service';
import { ExerciseController } from './exercise.controller';

describe('ExerciseController', () => {
  let appController: ExerciseController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseController],
      providers: [UserService],
    }).compile();

    appController = app.get<ExerciseController>(ExerciseController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});
