import { ProductSchema } from '../support/schemas';
import { expect, test } from './fixtures';

test.describe('Products API', () => {
  test('zwraca katalog zgodny z kontraktem', async ({ api }) => {
    const res = await api.products();
    expect(res.ok()).toBeTruthy();
    const products = ProductSchema.array().parse(await res.json());
    expect(products.length).toBeGreaterThan(0);
  });

  test('filtruje po kategorii', async ({ api }) => {
    const products = await (await api.products({ category: 'akcesoria' })).json();
    expect(products.every((p: { category: string }) => p.category === 'akcesoria')).toBe(true);
  });

  test('szuka po nazwie', async ({ api }) => {
    const products = await (await api.products({ q: 'Kolumbia' })).json();
    expect(products).toHaveLength(1);
  });

  test('wymaga co najmniej 2 znakow', async ({ api }) => {
    const res = await api.products({ q: 'K' });
    expect(res.status()).toBe(400);
  });
});
