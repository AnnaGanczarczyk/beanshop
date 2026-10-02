import { Router } from 'express';
import { db, resetDb } from '../store.js';

/** API tylko dla testow automatycznych. Wlaczane zmienna ENABLE_TEST_API=1. */
export const testApiRouter = Router();

testApiRouter.post('/reset', (_req, res) => {
  resetDb();
  res.status(204).end();
});

testApiRouter.post('/clock', (req, res) => {
  const value = req.body?.now;
  if (value === null || value === undefined) {
    db.fixedNow = null;
  } else {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) { res.status(400).json({ error: 'VALIDATION', message: 'Niepoprawna data' }); return; }
    db.fixedNow = date;
  }
  res.json({ now: (db.fixedNow ?? new Date()).toISOString(), fixed: db.fixedNow !== null });
});
