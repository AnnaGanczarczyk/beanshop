title: Promocja weekendowa: darmowa dostawa od 150 zł
---
## Co się zmienia
Marketing uruchamia stałą promocję: w soboty i niedziele darmowa dostawa od **150 zł** zamiast 200 zł.

- `src/domain/pricing.ts`: nowa funkcja `freeShippingThreshold(date)`, `shippingCost` i `priceCart` przyjmują datę.
- `src/routes/cart.ts`: przekazuje bieżący czas serwera.
- `docs/wymagania.md`: aktualizacja BR-04.
- Uproszczona logika kosztu dostawy.

## Jak przetestować
Ustaw czas serwera na sobotę (`POST /api/test/clock`) i sprawdź koszyk za 150-199 zł.

## Checklista
- [x] Testy przechodzą lokalnie
