import type { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly lines: Locator;
  readonly codeInput: Locator;
  readonly applyCode: Locator;
  readonly discountMessage: Locator;
  readonly subtotal: Locator;
  readonly discount: Locator;
  readonly shipping: Locator;
  readonly total: Locator;
  readonly checkout: Locator;

  constructor(private readonly page: Page) {
    this.lines = page.locator('tr.cart-line');
    this.codeInput = page.getByLabel('Kod rabatowy');
    this.applyCode = page.getByRole('button', { name: 'Zastosuj' });
    this.discountMessage = page.locator('#discount-msg');
    this.subtotal = page.getByTestId('subtotal');
    this.discount = page.getByTestId('discount');
    this.shipping = page.getByTestId('shipping');
    this.total = page.getByTestId('total');
    this.checkout = page.getByRole('button', { name: 'Złóż zamówienie' });
  }

  async goto() {
    await this.page.goto('/cart');
  }

  line(name: string): Locator {
    return this.lines.filter({ hasText: name });
  }

  async useCode(code: string) {
    await this.codeInput.fill(code);
    await this.applyCode.click();
  }

  async chooseShipping(method: 'standard' | 'express') {
    await this.page.getByLabel(method === 'standard' ? /Kurier standard/ : /Kurier express/).check();
  }
}
