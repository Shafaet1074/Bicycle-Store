import express from 'express';
import { productController } from './products.controller';

const router = express.Router();

router.post('/create-product', productController.createProducts);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.put('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

export const ProductRoute = router;
