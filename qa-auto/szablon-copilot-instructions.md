# Szablon: .github/copilot-instructions.md dla repozytorium testowego

Skopiuj do swojego projektu i uzupełnij. Krótko i konkretnie: Copilot lepiej stosuje 15 jasnych reguł niż 3 strony prozy.

```markdown
# Instrukcje Copilota: <nazwa frameworka testowego>

## Kontekst
- Testowana aplikacja: <co robi, link do wymagań>
- Stack testowy: <Playwright/Selenium/RestAssured...>, język <TS/Java>, runner <...>
- Struktura: <gdzie są testy UI, API, page objects, dane, fixtures>

## Zasady pisania testów
- Nazewnictwo: <konwencja nazw plików i testów>
- Lokatory: <priorytet; czego nie używamy>
- Czekanie: <tylko asercje web-first / explicit waits; zakaz sleep>
- Dane: <buildery, fabryki, skąd brać konta testowe; zakaz danych produkcyjnych>
- Asercje: <konkretne wartości; zakaz pustych asercji>
- Tagi: <@smoke, @regression, ...>

## Gdy test wykrywa błąd aplikacji
- Nie zmieniaj oczekiwanego wyniku. Oznacz test <mechanizm> i podaj link do zgłoszenia.

## Czego nie robić
- Nie modyfikuj kodu produkcyjnego w PR-ach testowych.
- Nie dodawaj zależności bez uzasadnienia.
```

Instrukcje dla konkretnych folderów: `.github/instructions/<nazwa>.instructions.md` z nagłówkiem `applyTo: "ścieżka/**"`.
