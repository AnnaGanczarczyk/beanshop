# Quality gates dla kodu testowego generowanego przez AI

Propozycja startowa do dostosowania w ćwiczeniu A5.

| Bramka | Narzędzie | Kiedy | Próg |
|--------|-----------|-------|------|
| Typy | `npm run typecheck` | każdy PR | 0 błędów |
| Testy | `npm test` | każdy PR | 100% zielonych (oznaczone `test.fail()` z linkiem do issue są dozwolone) |
| Stabilność nowych testów | `npx playwright test <zmienione pliki> --repeat-each=10` | PR z nowymi testami e2e | 0 porażek |
| Siła testów domeny | `npm run test:mutation` | nocnie / na żądanie | mutation score >= 70% dla `src/domain` |
| Dostępność | `@axe-core/playwright` | każdy PR dotykający `public/` | 0 naruszeń `serious` i `critical` |
| Zakazane wzorce | grep w CI | każdy PR | brak `waitForTimeout`, `test.only`, XPath |
| Review | Copilot code review + człowiek | każdy PR | 1 akceptacja człowieka |
