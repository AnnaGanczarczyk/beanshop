import { faker } from '@faker-js/faker/locale/pl';

export const USERS = {
  anna: { email: 'anna@beanshop.test', password: 'Kawa1234!', name: 'Anna Nowak' },
  jan: { email: 'jan@beanshop.test', password: 'Espresso99', name: 'Jan Kowalski' },
  admin: { email: 'admin@beanshop.test', password: 'Admin1234!', name: 'Admin Sklepu' },
} as const;

/** Identyfikatory produktow z danych startowych (src/store.ts). */
export const PRODUCTS = {
  etiopia: { id: 1, price: 44.99, stock: 12 },
  kolumbia: { id: 2, price: 39.99, stock: 5 },
  brazylia: { id: 3, price: 89.99, stock: 3 },
  espresso: { id: 4, price: 54.99, stock: 20 },
  kenia: { id: 5, price: 29.99, stock: 0 },
  mlynek: { id: 6, price: 159.0, stock: 4 },
  v60: { id: 7, price: 99.0, stock: 7 },
  dzbanek: { id: 8, price: 100.0, stock: 6 },
  filtry: { id: 9, price: 19.99, stock: 50 },
} as const;

/** Budowniczy danych nowego klienta. Nadpisz tylko to, co jest istotne w tescie. */
export function aCustomer(overrides: Partial<{ email: string; password: string; name: string }> = {}) {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email({ provider: 'beanshop.test' }).toLowerCase(),
    password: 'Haslo1234',
    ...overrides,
  };
}
