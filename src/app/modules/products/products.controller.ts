import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProducts = async (req: Request, res: Response) => {
  try {
    const product = req.body.products;

    const result = await ProductServices.createProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: 'Bicycle created successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: 'Failed to create product',
      error: err.message,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProductFromDB();
    res.status(200).json({
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: 'Failed to retrieve products',
      error: err.message,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProductByIdFromDB(productId);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: 'Failed to retrieve product',
      error: err.message,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updatedData = req.body;

    const result = await ProductServices.updateProductInDB(
      productId,
      updatedData,
    );

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Bicycle updated successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: 'Failed to update product',
      error: err.message,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductFromDB(productId);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: {},
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: 'Failed to delete product',
      error: err.message,
    });
  }
};

export const productController = {
  createProducts,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
