import { Router } from 'express';
import { db } from '../store.js';

export const productsRouter = Router();

productsRouter.get('/', (req, res) => {
  const q = typeof req.query.q === 'string' ? req.query.q.trim() : '';
  const category = typeof req.query.category === 'string' ? req.query.category : undefined;
  if (q.length === 1) {
    res.status(400).json({ error: 'QUERY_TOO_SHORT', message: 'Wpisz co najmniej 2 znaki' });
    return;
  }
  let result = db.products;
  if (q) result = result.filter((p) => p.name.includes(q));
  if (category) result = result.filter((p) => p.category === category);
  res.json(result);
});

productsRouter.get('/:id', (req, res) => {
  const product = db.products.find((p) => p.id === Number(req.params.id));
  if (!product) {
    res.status(404).json({ error: 'NOT_FOUND', message: 'Produkt nie istnieje' });
    return;
  }
  res.json(product);
});
