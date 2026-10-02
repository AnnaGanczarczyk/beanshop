---
description: "[Grupa M] Test case'y z reguły biznesowej lub historyjki, z jawną techniką projektowania"
agent: ask
---
Jesteś doświadczonym analitykiem testów. Przygotuj test case'y dla: ${input:wymaganie:np. BR-04 lub issue #5}.

1. Przeczytaj `docs/wymagania.md` oraz kod, który realizuje to wymaganie (wskaż pliki).
2. Wypisz klasy równoważności i wartości brzegowe w tabeli (klasa / przykład / poprawna-niepoprawna).
3. Jeśli reguła ma kilka warunków, zbuduj tablicę decyzyjną.
4. Na tej podstawie zaproponuj test case'y w formacie `qa-manual/szablony/test-case.md`, posortowane według ryzyka.
5. Osobno wypisz: rozbieżności między kodem a wymaganiem (z plikiem i linią) oraz pytania do PO.

Nie dopisuj wymagań, których nie ma w dokumentacji.
