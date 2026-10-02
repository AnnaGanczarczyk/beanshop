import { PRODUCTS } from '../support/data';
import { CartSchema } from '../support/schemas';
import { expect, test } from './fixtures';

test.describe('Cart API', () => {
  test('dodaje produkt do koszyka', async ({ customer }) => {
    const res = await customer.addToCart(PRODUCTS.etiopia.id, 2);
    expect(res.status()).toBe(201);
    const cart = CartSchema.parse(await res.json());
    expect(cart.items[0]).toMatchObject({ productId: PRODUCTS.etiopia.id, quantity: 2 });
  });

  test('nie pozwala dodac produktu bez stanu', async ({ customer }) => {
    const res = await customer.addToCart(PRODUCTS.kenia.id, 1);
    expect(res.status()).toBe(409);
  });

  test('nie pozwala przekroczyc 10 sztuk', async ({ customer }) => {
    const res = await customer.addToCart(PRODUCTS.filtry.id, 11);
    expect(res.status()).toBe(400);
  });

  test('stosuje kod KAWA10', async ({ customer }) => {
    await customer.addToCart(PRODUCTS.v60.id, 1);
    const cart = await (await customer.applyCode('kawa10')).json();
    expect(cart.summary.discount).toBe(9.9);
    expect(cart.summary.appliedCodes).toEqual(['KAWA10']);
  });

  test('odrzuca wygasly kod LATO25', async ({ customer }) => {
    await customer.addToCart(PRODUCTS.v60.id, 1);
    const res = await customer.applyCode('LATO25');
    expect(res.status()).toBe(422);
  });

  test('wymaga logowania', async ({ api }) => {
    const res = await api.cart();
    expect(res.status()).toBe(401);
  });
});
