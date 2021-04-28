import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Exercise' })
  exercise: MongooseSchema.Types.ObjectId ;

  @Prop(raw({
    type: { type: String },
    coordinates: [Number],
  }))
  location: Record<string, any>;

  @Prop([raw({
    name: { type: String },
    amount: Number,
  })])
  products: [Record<string, any>];
}

export const OrderSchema = SchemaFactory.createForClass(Order);