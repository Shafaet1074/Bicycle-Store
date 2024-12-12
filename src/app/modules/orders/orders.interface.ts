import { Document, Types } from 'mongoose';

export interface Order extends Document {
  email: string;
  product: Types.ObjectId; // Correctly typed ObjectId reference
  quantity: number;
  totalPrice: number;
}
