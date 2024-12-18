import express, { Application } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/modules/products/products.route';
import { OrdersRoute } from './app/modules/orders/orders.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the bi-cycle store',
  });
});
app.use('/api/v1/products', ProductRoute);
app.use('/api/v1/orders', OrdersRoute);

export default app;
