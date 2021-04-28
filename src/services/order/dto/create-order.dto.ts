import { Exercise } from "src/schemas/exercise.schema";
import { User } from "src/schemas/user.schema";

export class CreateOrderDto {
  readonly user: User;
  readonly exercise: Exercise;
  readonly location: Record<string, any>;
  readonly products: [Record<string, any>];
}