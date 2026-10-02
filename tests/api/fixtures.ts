import { test as base } from '@playwright/test';
import { BeanShopApi } from '../support/api-client';

type Fixtures = { api: BeanShopApi; customer: BeanShopApi; admin: BeanShopApi };

export const test = base.extend<Fixtures>({
  api: async ({ request }, use) => {
    const api = new BeanShopApi(request);
    await api.reset();
    await use(api);
  },
  customer: async ({ api, request }, use) => {
    const client = new BeanShopApi(request);
    await client.login();
    await use(client);
  },
  admin: async ({ api, request }, use) => {
    const client = new BeanShopApi(request);
    await client.login('admin@beanshop.test', 'Admin1234!');
    await use(client);
  },
});

export { expect } from '@playwright/test';
