---
applyTo: "tests/unit/**"
---
# Testy jednostkowe (Vitest)

- Testujemy wyłącznie `src/domain/**`. Bez HTTP i bez bazy.
- Wartości brzegowe z `docs/wymagania.md` (analiza wartości brzegowych: min-1, min, max, max+1).
- Dla tabel przypadków używaj `it.each`.
- Dla niezmienników (np. "suma nigdy nie jest ujemna", "kwoty mają max 2 miejsca po przecinku") używaj testów property-based z `fast-check`.
- Jakość testów weryfikujemy mutacyjnie: `npm run test:mutation` (Stryker).
