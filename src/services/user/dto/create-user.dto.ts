export class CreateUserDto {
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly defaultLocation: Record<string, any>;
}