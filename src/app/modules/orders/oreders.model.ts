import { Schema, model } from 'mongoose';
import { Order } from './orders.interface';

const OrdersSchema = new Schema<Order>(
  {
    email: { type: String, required: true },
    // Use Schema.Types.ObjectId instead of Types.ObjectId
    product: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

export const ordersModel = model<Order>('Order', OrdersSchema);
