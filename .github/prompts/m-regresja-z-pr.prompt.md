---
description: "[Grupa M] Analiza wpływu zmiany z pull requesta i lista testów regresji"
agent: ask
---
Przeanalizuj zmiany z pull requesta ${input:pr:numer PR lub nazwa brancha} z perspektywy testera manualnego.

1. Opisz prostym językiem, co się zmienia dla klienta sklepu (bez żargonu programistycznego).
2. Wskaż, które reguły BR-xx z `docs/wymagania.md` są dotknięte bezpośrednio, a które pośrednio (przez współdzielony kod).
3. Oceń ryzyko każdego obszaru: prawdopodobieństwo x wpływ (1-3), w tabeli.
4. Zaproponuj checklistę testów regresji: najpierw obszary wysokiego ryzyka, dla każdego konkretne dane testowe.
5. Wypisz, czego NIE trzeba testować i dlaczego.
