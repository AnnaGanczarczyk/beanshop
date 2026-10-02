# A5. Weryfikacja kodu AI i standardy zespołowe (70 min + plan wdrożenia)

## 5.1 Copilot code review (20 min)

PR **"Testy koszyka (wygenerowane przez AI)"** (branch `test/koszyk-testy-z-ai`, etykieta `ai-generated`) zawiera testy przyjęte "bo przechodzą".

1. W PR: `Reviewers` -> **Copilot**. Poczekaj na komentarze.
2. Niezależnie zrób własny review: prompt `/a-review-testow-ai` z nazwą brancha, plus `qa-auto/checklista-review-kodu-ai.md`.
3. Porównaj: co znalazł Copilot, co znalazłeś Ty, czego nie znalazł nikt? Szczególnie: czy któryś test **utrwala błąd aplikacji** jako oczekiwane zachowanie?
4. Zostaw review w PR (komentarze w liniach, bez akceptacji). Początek: `[grupa-A] @<login>`.

## 5.2 Quality gates (30 min)

Branch: `a/<login>/A5-gates`. Na podstawie `qa-auto/quality-gates.md`, w trybie Agent:

1. **Dostępność:** `tests/e2e/a11y.spec.ts` z `@axe-core/playwright` dla `/`, `/login`, `/register`, `/cart` (z produktem w koszyku). Brama: 0 naruszeń `serious` i `critical`. Co wykrył axe? Które naruszenia to błędy wobec BR-11?
2. **Zakazane wzorce:** krok w `.github/workflows/ci.yml`, który kończy job błędem, gdy w `tests/` (poza `tests/e2e/legacy/`) jest `waitForTimeout` lub `test.only`.
3. **Próg mutacyjny:** ustaw w `stryker.config.json` `thresholds.break` na poziom, który dziś przechodzi po Twoich poprawkach z A1. Uzasadnij wartość w PR.
4. Push i obserwuj CI w zakładce `Actions`.

## 5.3 Koszty i higiena pracy agentowej (10 min, dyskusja)

- Premium requests: które tryby i modele je zużywają? Gdzie widać zużycie (ustawienia konta Copilot)?
- Kiedy wystarczy Ask z `#file`, a kiedy opłaca się Agent?
- Higiena: nowy czat per zadanie, wskazywanie kontekstu (`#file`, `#selection`), wyłączanie zbędnych narzędzi MCP, przerwanie agenta, gdy kręci się w kółko.

## 5.4 Plan wdrożenia w moim projekcie (20 min)

1. Na podstawie `qa-auto/szablon-copilot-instructions.md` napisz `copilot-instructions.md` dla **swojego** frameworka (bez nazw klientów i sekretów).
2. Wypisz 3 quality gates, które wprowadzisz jako pierwsze, i jak zmierzysz efekt.
3. Zapisz jako `qa-auto/uczestnicy/<login>/plan-wdrozenia.md` w draft PR.

## Gotowe, gdy
- [ ] Review w PR `ai-generated`.
- [ ] Draft PR z a11y testem, krokiem CI, progiem mutacyjnym i planem wdrożenia.
