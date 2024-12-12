import { Request, Response } from 'express';
import { orderServices } from './orders.services';

const createOrders = async (req: Request, res: Response) => {
  try {
    const order = req.body.orders;

    const result = await orderServices.createOrderIntoDB(order);

    res.status(200).json({
      success: true,
      message: 'Bicycle created successfully',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to create product',
      error: (err as Error).message,
    });
  }
};

const calculateRevenue = async (_req: Request, res: Response) => {
  try {
    const totalRevenue = await orderServices.calculateTotalRevenue();

    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: {
        totalRevenue,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to calculate revenue',
      error: (err as Error).message, // Assert type here
    });
  }
};

export const orderController = {
  createOrders,
  calculateRevenue, // Ensure this is included in the export
};
