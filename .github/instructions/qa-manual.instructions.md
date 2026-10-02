---
applyTo: "qa-manual/**"
---
# Dokumentacja testów manualnych

- Test case'y zapisuj według `qa-manual/szablony/test-case.md`. ID: `TC-<obszar>-<nr>`, np. `TC-KOSZ-007`.
- Każdy test case ma: powiązanie z regułą BR-xx lub historyjką US-xx, technikę projektowania (podział na klasy, wartości brzegowe, tablica decyzyjna, przejścia stanów, pairwise, zgadywanie błędów), priorytet wynikający z ryzyka.
- Kroki są konkretne i wykonywalne przez inną osobę: dokładne dane wejściowe i dokładny oczekiwany wynik (kwoty z groszami).
- Nie wymyślaj funkcji, których nie ma w `docs/wymagania.md` ani w kodzie. Jeśli wymaganie jest niejasne, dopisz pytanie do sekcji "Pytania do PO".
