import { aCustomer, USERS } from '../support/data';
import { expect, test } from './fixtures';

test.describe('Auth API', () => {
  test('loguje klienta poprawnymi danymi', async ({ api }) => {
    const res = await api.login(USERS.anna.email, USERS.anna.password);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.user).toMatchObject({ email: USERS.anna.email, role: 'customer' });
    expect(body.token).toEqual(expect.any(String));
  });

  test('odrzuca bledne haslo', async ({ api }) => {
    const res = await api.login(USERS.anna.email, 'zle-haslo');
    expect(res.status()).toBe(401);
  });

  test('rejestruje nowego klienta', async ({ api }) => {
    const res = await api.register(aCustomer());
    expect(res.status()).toBe(201);
  });

  test('nie pozwala zarejestrowac drugi raz tego samego e-maila', async ({ api }) => {
    const res = await api.register(aCustomer({ email: 'ANNA@beanshop.test' }));
    expect(res.status()).toBe(409);
  });

  test('blokuje konto po 5 nieudanych probach', async ({ api }) => {
    for (let i = 0; i < 5; i++) await api.login(USERS.jan.email, 'zle-haslo');
    const res = await api.login(USERS.jan.email, USERS.jan.password);
    expect(res.status()).toBe(423);
  });
});
