---
description: "[Grupa A] Przegląd testów wygenerowanych przez AI według checklisty zespołu"
agent: ask
---
Zrób przegląd testów w ${input:zakres:plik, folder lub PR} według `qa-auto/checklista-review-kodu-ai.md`.

Dla każdego punktu checklisty: OK / problem (plik:linia) / nie dotyczy. Na końcu: 3 najważniejsze poprawki i ocena, czy te testy wykryłyby błąd, gdyby logika w `src/domain/` się zepsuła (podaj przykład mutacji, której nie wykryją).
