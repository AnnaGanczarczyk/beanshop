import type { APIRequestContext } from '@playwright/test';
import { USERS } from './data';

/** Cienki klient API BeanShop dla testow API i przygotowania danych w e2e. */
export class BeanShopApi {
  constructor(private readonly request: APIRequestContext, private token?: string) {}

  private headers(): Record<string, string> {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {};
  }

  async reset() {
    await this.request.post('/api/test/reset');
  }

  async setClock(now: string | null) {
    return this.request.post('/api/test/clock', { data: { now } });
  }

  async login(email: string = USERS.anna.email, password: string = USERS.anna.password) {
    const res = await this.request.post('/api/auth/login', { data: { email, password } });
    if (res.ok()) this.token = (await res.json()).token;
    return res;
  }

  register(data: { email: string; password: string; name: string }) {
    return this.request.post('/api/auth/register', { data });
  }

  products(query: Record<string, string> = {}) {
    return this.request.get('/api/products', { params: query });
  }

  product(id: number) {
    return this.request.get(`/api/products/${id}`);
  }

  cart() {
    return this.request.get('/api/cart', { headers: this.headers() });
  }

  addToCart(productId: number, quantity = 1) {
    return this.request.post('/api/cart/items', { headers: this.headers(), data: { productId, quantity } });
  }

  updateQuantity(productId: number, quantity: number) {
    return this.request.patch(`/api/cart/items/${productId}`, { headers: this.headers(), data: { quantity } });
  }

  applyCode(code: string) {
    return this.request.post('/api/cart/discount', { headers: this.headers(), data: { code } });
  }

  setShipping(method: 'STANDARD' | 'EXPRESS') {
    return this.request.put('/api/cart/shipping', { headers: this.headers(), data: { method } });
  }

  placeOrder() {
    return this.request.post('/api/orders', { headers: this.headers() });
  }

  orders() {
    return this.request.get('/api/orders', { headers: this.headers() });
  }

  pay(orderId: number) {
    return this.request.post(`/api/orders/${orderId}/pay`, { headers: this.headers() });
  }

  cancel(orderId: number) {
    return this.request.post(`/api/orders/${orderId}/cancel`, { headers: this.headers() });
  }

  setStatus(orderId: number, status: string) {
    return this.request.patch(`/api/orders/${orderId}/status`, { headers: this.headers(), data: { status } });
  }
}
