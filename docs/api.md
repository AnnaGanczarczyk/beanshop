# BeanShop: API (skrót)

Wszystkie odpowiedzi to JSON. Błędy: `{ "error": "KOD", "message": "opis po polsku" }`.
Autoryzacja: nagłówek `Authorization: Bearer <token>` lub cookie `sid`.

| Metoda | Ścieżka | Opis | Kody odpowiedzi |
|--------|---------|------|-----------------|
| GET | /api/health | status aplikacji | 200 |
| POST | /api/auth/register | `{ email, password, name }` | 201, 400, 409 |
| POST | /api/auth/login | `{ email, password }` -> `{ token, user }` | 200, 400, 401, 423 |
| POST | /api/auth/logout | wylogowanie | 204 |
| GET | /api/auth/me | zalogowany użytkownik | 200, 401 |
| GET | /api/products?q=&category= | lista produktów | 200, 400 |
| GET | /api/products/:id | produkt | 200, 404 |
| GET | /api/cart | koszyk z podsumowaniem | 200, 401 |
| POST | /api/cart/items | `{ productId, quantity }` | 201, 400, 404, 409 |
| PATCH | /api/cart/items/:productId | `{ quantity }` | 200, 400, 404, 409 |
| DELETE | /api/cart/items/:productId | usuń pozycję | 200 |
| POST | /api/cart/discount | `{ code }` | 200, 409, 422 |
| DELETE | /api/cart/discount | usuń kody | 200 |
| PUT | /api/cart/shipping | `{ method: "STANDARD" \| "EXPRESS" }` | 200, 400 |
| GET | /api/orders | moje zamówienia (admin: wszystkie) | 200 |
| POST | /api/orders | złóż zamówienie z koszyka | 201, 400, 409 |
| POST | /api/orders/:id/pay | opłać | 200, 404, 409 |
| POST | /api/orders/:id/cancel | anuluj | 200, 404, 409 |
| PATCH | /api/orders/:id/status | `{ status }`, tylko admin | 200, 400, 403, 404, 409 |

Kształt podsumowania koszyka (`summary`):

```json
{ "subtotal": 200.00, "discount": 20.00, "shipping": 0, "total": 180.00, "appliedCodes": ["KAWA10"] }
```
