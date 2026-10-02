import { PRODUCTS } from '../support/data';
import { expect, test } from './fixtures';

test.describe('Orders API', () => {
  test('sklada zamowienie i zdejmuje towar ze stanu', async ({ customer, api }) => {
    await customer.addToCart(PRODUCTS.brazylia.id, 2);
    const res = await customer.placeOrder();
    expect(res.status()).toBe(201);
    expect((await res.json()).status).toBe('NEW');
    const product = await (await api.product(PRODUCTS.brazylia.id)).json();
    expect(product.stock).toBe(PRODUCTS.brazylia.stock - 2);
  });

  test('anuluje nowe zamowienie', async ({ customer }) => {
    await customer.addToCart(PRODUCTS.etiopia.id, 1);
    const order = await (await customer.placeOrder()).json();
    const res = await customer.cancel(order.id);
    expect((await res.json()).status).toBe('CANCELLED');
  });

  test('klient nie moze zmienic statusu', async ({ customer }) => {
    await customer.addToCart(PRODUCTS.etiopia.id, 1);
    const order = await (await customer.placeOrder()).json();
    const res = await customer.setStatus(order.id, 'SHIPPED');
    expect(res.status()).toBe(403);
  });
});
