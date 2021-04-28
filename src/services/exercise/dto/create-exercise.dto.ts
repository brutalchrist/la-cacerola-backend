export class CreateExerciseDto {
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly defaultAddress: string;
  readonly defaultLocation: Record<string, any>;
}