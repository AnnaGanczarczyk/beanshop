title: Testy API dla zmiany ilości w koszyku (PATCH /api/cart/items/:productId)
labels: grupa-A,testy
---
Brakuje testów API dla zmiany ilości pozycji w koszyku.

### Zakres
- Dodaj `tests/api/cart-quantity.api.spec.ts`.
- Pokryj BR-03 analizą wartości brzegowych (ilość i stan magazynowy) oraz przypadki błędów (nieistniejąca pozycja, brak logowania).
- Stosuj `.github/instructions/testy-api.instructions.md`.
- Jeśli aplikacja zachowuje się niezgodnie z `docs/wymagania.md`, oznacz test `test.fail()` z komentarzem `// BUG` i opisz to w PR. Nie zmieniaj `src/`.

Ćwiczenie **A3.3**: issue przypisuje do Copilota trener.
