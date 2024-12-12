import { Request, Response, NextFunction } from 'express';
import { ProductServices } from './product.service';
// Assuming your service methods are correct

const createProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newProduct = req.body;
    const result = await ProductServices.createProductIntoDB(newProduct);
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (err) {
    next(err); // pass the error to the global error handler
  }
};

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await ProductServices.getProductFromDB();
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (err) {
    next(err);
  }
};

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.productId;
    const product = await ProductServices.getSpecificProductFromDB(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.productId;
    const updateData = req.body;
    const updatedProduct = await ProductServices.updateProductInDB(
      productId,
      updateData,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: updatedProduct,
    });
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.productId;
    await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
    });
  } catch (err) {
    next(err);
  }
};

export const productController = {
  createProducts,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
