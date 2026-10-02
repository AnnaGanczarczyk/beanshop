title: Punkty lojalnościowe za zamówienia
---
## Co się zmienia
Program lojalnościowy BeanShop (etap 1: naliczanie i wyświetlanie).

**Reguły od biznesu:**
- 1 punkt za każde **pełne** 10 zł wartości produktów po rabacie (bez dostawy). Przykład: 129,99 zł = 12 pkt.
- Punkty są naliczane, gdy zamówienie zostanie **opłacone**.
- Anulowanie zamówienia **odbiera** punkty za to zamówienie.
- Saldo punktów widać na stronie "Zamówienia".

## Zmiany techniczne
- `src/domain/loyalty.ts`: wyliczanie punktów.
- `src/store.ts`: pole `points` w użytkowniku i w zamówieniu.
- `src/routes/orders.ts`: naliczanie punktów, endpoint `GET /api/orders/points`.
- `public/orders.html`: wyświetlanie salda.

## Checklista
- [x] Testy przechodzą lokalnie
