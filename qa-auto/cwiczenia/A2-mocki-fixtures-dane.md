# A2. Mocki, fixtures i dane testowe (60 min)

Branch: `a/<login>/A2-dane`.

## 2.1 Fixture z przygotowanym koszykiem (10 min)

Poproś Copilota o fixture `cartWith` w `tests/e2e/fixtures.ts`: przyjmuje listę `{ product: keyof typeof PRODUCTS, qty }`, przygotowuje koszyk zalogowanej Anny przez API i zwraca stronę koszyka. Użyj go w jednym istniejącym teście w `cart.spec.ts` zamiast ręcznego `page.request.post`.

## 2.2 Testy parametryzowane z tablicy decyzyjnej (15 min)

`tests/api/shipping.api.spec.ts`: tablica przypadków `{ opis, koszyk, kod, metoda, oczekiwanaDostawa, oczekiwanaSuma }` zgodnie z BR-04..BR-06, jeden `test()` na wiersz.

- Copilot proponuje wiersze. **Ty** przeliczasz oczekiwane kwoty na podstawie wymagań.
- Obowiązkowo: wartość dokładnie 200,00 zł; 200,00 zł z kodem; express przy darmowej dostawie; dwa różne kody po kolei.

## 2.3 Kontrola czasu (10 min)

Kod `JESIEN15` jest ważny do 30.11.2026 **włącznie** (BR-06). Napisz testy API z `api.setClock(...)` dla: 30.11 12:00, 30.11 23:59, 01.12 00:00 (czas polski). Pamiętaj o `setClock(null)` w `afterEach`.

## 2.4 Mockowanie sieci w UI (15 min)

Z `page.route()`:
1. `GET /api/products` zwraca pustą listę: UI pokazuje "Brak produktów spełniających kryteria".
2. `POST /api/cart/discount` zwraca 500 bez body: co pokazuje UI? Czy komunikat jest sensowny dla klienta? (Nie ma reguły: to jest pytanie do PO, zapisz je w opisie PR.)
3. Typ odpowiedzi mocka wyprowadź ze schematów zod (`z.infer<typeof ProductSchema>`), żeby mock nie rozjechał się z kontraktem.

## 2.5 Pułapka `/fixTestFailure` (10 min)

Weź test z 2.2 lub 2.3, który pada z powodu błędu aplikacji. Uruchom na nim `/fixTestFailure`.

- Co proponuje Copilot? Jeśli "poprawia" oczekiwaną wartość pod aplikację: **odrzuć**.
- Napisz w czacie, że test jest zgodny z BR-xx, i poproś o poprawną reakcję (`test.fail()` + komentarz + treść zgłoszenia błędu).
- Zgłoś błąd przez formularz **Zgłoszenie błędu** z grupą `grupa-A` (sprawdź, czy już nie istnieje).

## Gotowe, gdy
- [ ] Draft PR z fixture, testami parametryzowanymi, zegarem i mockami.
- [ ] Co najmniej 1 issue `[BUG]` z etykietą `grupa-A` i linkiem do testu, który go wykrywa.
