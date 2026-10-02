---
description: "[Grupa A] Nowy test e2e w stylu frameworka BeanShop"
agent: agent
---
Napisz test e2e dla scenariusza: ${input:scenariusz}.

- Zanim napiszesz kod, wypisz plan: dane przygotowane przez API, kroki w UI, asercje (z konkretnymi wartościami z `docs/wymagania.md`).
- Trzymaj się `.github/instructions/testy-e2e.instructions.md`: fixtures, page objects, lokatory po roli, asercje web-first.
- Uruchom test (`npx playwright test <plik>`). Jeśli nie przechodzi, ustal czy problem jest w teście, czy w aplikacji. Jeśli w aplikacji: NIE zmieniaj oczekiwań, oznacz test `test.fail()` z komentarzem `// BUG: ..., BR-xx`.
