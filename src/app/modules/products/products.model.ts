import { Schema, model } from 'mongoose';
import { Product } from './products.interface';

const productSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

export const ProductModel = model<Product>('Products', productSchema);
