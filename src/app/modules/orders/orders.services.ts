import { Order } from './orders.interface';
import { ordersModel } from './oreders.model';

const createOrderIntoDB = async (orders: Order) => {
  const result = await ordersModel.create(orders);
  return result;
};

const calculateTotalRevenue = async (): Promise<number> => {
  const result = await ordersModel.aggregate([
    {
      $group: {
        _id: null, // Group all documents
        totalRevenue: {
          $sum: {
            $multiply: ['$totalPrice', '$quantity'], // Multiply price by quantity
          },
        },
      },
    },
  ]);

  // If no orders exist, return 0 revenue
  return result.length > 0 ? result[0].totalRevenue : 0;
};

export const orderServices = {
  createOrderIntoDB,
  calculateTotalRevenue,
};
