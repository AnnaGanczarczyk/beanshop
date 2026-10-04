import { PRODUCTS } from '../support/data';
import { expect, test } from './fixtures';

test.describe('Walidacja dostępu do koszyka', () => {
  test('niezalogowany klient po kliknięciu Dodaj do koszyka trafia na logowanie', async ({
    api,
    page,
    catalog,
  }) => {
    // Upewnij się, że nie mamy zalogowanego użytkownika
    await api.reset();
    
    // Otwórz katalog jako niezalogowany
    await page.goto('/');
    
    // Kliknij "Dodaj do koszyka" na dowolnym produkcie
    await catalog.addToCart('Etiopia Yirgacheffe');
    
    // Powinien być redirectowany na /login
    await expect(page).toHaveURL('/login');
    
    // Strona logowania powinna być widoczna
    await expect(page.getByRole('heading', { name: 'Zaloguj się' })).toBeVisible();
  });
});
