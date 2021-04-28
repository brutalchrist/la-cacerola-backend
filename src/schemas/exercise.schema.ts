import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExerciseDocument = Exercise & Document;

@Schema()
export class Exercise {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  defaultAddress: string;

  @Prop(raw({
    type: { type: String },
    coordinates: [Number],
  }))
  defaultLocation: Record<string, any>;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);