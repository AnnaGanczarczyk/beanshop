import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { authRouter } from './routes/auth.js';
import { cartRouter } from './routes/cart.js';
import { ordersRouter } from './routes/orders.js';
import { productsRouter } from './routes/products.js';
import { testApiRouter } from './routes/testApi.js';

const here = path.dirname(fileURLToPath(import.meta.url));

export function createApp() {
  const app = express();
  app.use(express.json());
  app.get('/api/health', (_req, res) => res.json({ status: 'ok', version: '1.4.0' }));
  app.use('/api/auth', authRouter);
  app.use('/api/products', productsRouter);
  app.use('/api/cart', cartRouter);
  app.use('/api/orders', ordersRouter);
  if (process.env.ENABLE_TEST_API === '1') app.use('/api/test', testApiRouter);
  app.use('/api', (_req, res) => res.status(404).json({ error: 'NOT_FOUND', message: 'Nieznany endpoint' }));
  app.use(express.static(path.join(here, '..', 'public'), { extensions: ['html'] }));
  return app;
}
