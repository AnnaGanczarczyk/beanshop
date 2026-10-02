---
description: "[Grupa A] Analiza niestabilnego testu: hipotezy, eksperyment, poprawka"
agent: agent
---
Test ${input:test:plik lub nazwa testu} jest niestabilny.

1. Uruchom go wielokrotnie: `npx playwright test <plik> -g "<nazwa>" --repeat-each=20 --reporter=line`. Podaj odsetek porażek.
2. Przeczytaj test i kod aplikacji, który testuje (frontend i API). Wypisz co najmniej 3 hipotezy przyczyny, od najbardziej prawdopodobnej.
3. Dla najbardziej prawdopodobnej zaproponuj eksperyment potwierdzający (np. trace, logi, zmiana opóźnienia).
4. Popraw test (nie aplikację), stosując asercje web-first. Bez zwiększania timeoutów i bez `waitForTimeout`.
5. Uruchom ponownie z `--repeat-each=30` i pokaż wynik.
