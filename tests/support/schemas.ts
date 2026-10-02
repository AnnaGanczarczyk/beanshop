import { z } from 'zod';

/** Kontrakty odpowiedzi API (testy kontraktowe po stronie konsumenta). */
export const ProductSchema = z.object({
  id: z.number().int(),
  sku: z.string(),
  name: z.string(),
  category: z.enum(['kawa', 'akcesoria']),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
  description: z.string(),
});

export const SummarySchema = z.object({
  subtotal: z.number(),
  discount: z.number(),
  shipping: z.number(),
  total: z.number(),
  appliedCodes: z.array(z.string()),
});

export const CartSchema = z.object({
  items: z.array(z.object({
    productId: z.number().int(),
    name: z.string(),
    unitPrice: z.number(),
    quantity: z.number().int(),
    lineTotal: z.number(),
  })),
  shipping: z.enum(['STANDARD', 'EXPRESS']),
  summary: SummarySchema,
});

export const ErrorSchema = z.object({ error: z.string(), message: z.string() });
