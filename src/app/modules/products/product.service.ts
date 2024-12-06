import { Product } from './products.interface';
import { ProductModel } from './products.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSpecificProductFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

const updateProductInDB = async (
  productId: string,
  updatedData: Partial<Product>,
) => {
  const result = await ProductModel.findByIdAndUpdate(
    productId,
    { ...updatedData },
    { new: true }, // Returns the updated document
  );
  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete(productId);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getProductFromDB,
  getSpecificProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
