# BeanShop: repozytorium warsztatowe QA + GitHub Copilot

Sklep internetowy z kawą, przygotowany do dwóch jednodniowych szkoleń Integrivo:

| | Grupa M | Grupa A |
|---|---|---|
| Szkolenie | GitHub Copilot dla testera manualnego | GitHub Copilot dla testera automatyzującego |
| Twoja ścieżka | [`qa-manual/`](qa-manual/README.md) | [`qa-auto/`](qa-auto/README.md) |
| Etykieta | `grupa-M` | `grupa-A` |
| Branche | `m/<login>` | `a/<login>/<ćwiczenie>` |
| Narzędzia | github.com, Copilot Chat, Spaces, Codespace w przeglądarce | VS Code, Copilot Ask/Plan/Agent, Playwright MCP, coding agent |
| Zmieniasz kod? | Nie. Pytasz o niego. | Tak, kod testów w `tests/`. Nie zmieniasz `src/`. |

> Aplikacja **celowo zawiera błędy**. Wymagania w `docs/wymagania.md` są źródłem prawdy, kod nie.

## Start w 2 minuty

**Codespace (zalecane):** `Code` -> `Codespaces` -> `Create codespace on main`. Aplikacja startuje sama na porcie 3000.

**Lokalnie:** Node.js 20+.

```bash
npm ci
npm start                      # http://localhost:3000
npm test                       # testy unit + API + e2e (Playwright sam uruchamia aplikację)
```

Restart aplikacji z czystymi danymi: `bash scripts/restart-app.sh`.

## Konta testowe

| E-mail | Hasło | Rola |
|--------|-------|------|
| anna@beanshop.test | Kawa1234! | klient |
| jan@beanshop.test | Espresso99 | klient |
| admin@beanshop.test | Admin1234! | obsługa sklepu |

## Mapa repozytorium

```
docs/                  wymagania (BR-xx), architektura, API
src/                   aplikacja (Express + TypeScript)
public/                frontend (HTML + JS)
tests/                 framework testowy: unit (Vitest), api i e2e (Playwright)
qa-manual/             ścieżka grupy M: ćwiczenia, szablony, folder uczestników
qa-auto/               ścieżka grupy A: ćwiczenia, checklisty, quality gates
.github/               instrukcje Copilota, prompty m-* i a-*, agent analityk-qa, formularze issues, CI
.vscode/mcp.json       serwer Playwright MCP
workshop/              dane do przygotowania repo przez trenera (issues, skrypt setup)
```

## Zasady wspólnego repozytorium

1. `main` jest wspólną bazą i nie zmienia się w trakcie szkolenia. Nikt nie merguje PR-ów uczestników.
2. Każdy pracuje na swoim branchu z prefiksem grupy (`m/` lub `a/`).
3. PR-y uczestników są **draft** i mają etykietę grupy.
4. Przed zgłoszeniem błędu sprawdź, czy nie ma go już w issues Twojej grupy (filtr `label:grupa-M` / `label:grupa-A`).
