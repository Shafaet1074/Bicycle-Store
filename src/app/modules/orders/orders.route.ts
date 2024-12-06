import express from 'express';
import { orderController } from './orders.controller';

const router = express.Router();

router.post('/create-order', orderController.createOrders);
router.get('/revenue', orderController.calculateRevenue); // New endpoint

export const OrdersRoute = router;
