---
applyTo: "tests/api/**"
---
# Testy API (Playwright request)

- Importuj `test` i `expect` z `tests/api/fixtures.ts`. Fixtures: `api` (bez logowania, resetuje dane), `customer` (Anna), `admin`.
- Wywołania tylko przez klasę `BeanShopApi` z `tests/support/api-client.ts`. Brakującą metodę dodaj do klienta.
- Kształt odpowiedzi waliduj schematami zod z `tests/support/schemas.ts` (testy kontraktowe).
- Sprawdzaj kod HTTP ORAZ pole `error` w odpowiedzi błędu.
- Dane: stałe z `tests/support/data.ts` (`USERS`, `PRODUCTS`), nowi klienci z `aCustomer()`.
- Do testów zależnych od daty używaj `api.setClock(...)` i przywracaj `api.setClock(null)`.
