// UWAGA: test odziedziczony po poprzednim zespole. Nie korzysta z page objects ani fixtures.
// Do refaktoryzacji (cwiczenie A4).
import { expect, test } from '@playwright/test';

test('zakup kawy od zalogowania do zamowienia', async ({ page, request }) => {
  await request.post('/api/test/reset');
  await page.goto('/login');
  await page.fill('#email', 'anna@beanshop.test');
  await page.fill('#password', 'Kawa1234!');
  await page.click('#login-submit');
  await page.waitForTimeout(1000);

  await page.click('//article[contains(., "Brazylia")]//button');
  await page.waitForTimeout(1000);
  await page.click('//article[contains(., "Espresso Blend")]//button');
  await page.waitForTimeout(1000);

  await page.goto('/cart');
  await page.waitForTimeout(1000);
  const rows = await page.$$('tbody#cart-lines tr');
  expect(rows.length).toBe(2);

  await page.check('input[name="shipping"][value="EXPRESS"]');
  await page.waitForTimeout(500);
  const total = await page.textContent('.summary .total span:nth-child(2)');
  expect(total).toBe('169,97 zł');

  await page.click('#checkout');
  await page.waitForTimeout(1000);
  expect(await page.textContent('#created-msg')).toContain('zostało złożone');
  expect(await page.textContent('tbody#orders tr td.status')).toBe('Nowe');
});
