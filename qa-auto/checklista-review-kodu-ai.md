# Checklista review testów wygenerowanych przez AI

## Wartość testu
- [ ] Test ma jasno nazwaną regułę (BR-xx) i sprawdza **konkretne** wartości.
- [ ] Oczekiwana wartość pochodzi z wymagań, a nie jest przepisana z aktualnego zachowania aplikacji.
- [ ] Oczekiwana wartość nie jest liczona tym samym wzorem co w kodzie produkcyjnym (test "lustro").
- [ ] Wiem, jaka mutacja w `src/` sprawiłaby, że test padnie.
- [ ] Brak duplikatów: test nie powtarza istniejącego scenariusza.

## Stabilność
- [ ] Brak `waitForTimeout`, `setTimeout`, pętli z odpytywaniem.
- [ ] Asercje web-first (`await expect(locator)...`).
- [ ] Test sam przygotowuje dane (fixture `api` / reset) i nie zależy od kolejności.
- [ ] Brak zależności od bieżącej daty bez kontroli zegara.

## Zgodność z frameworkiem
- [ ] Importy `test`/`expect` z naszych fixtures.
- [ ] Page objects zamiast selektorów w teście; lokatory po roli/etykiecie.
- [ ] Dane z `tests/support/data.ts` lub builderów, bez "magicznych" liczb bez komentarza.
- [ ] Brak `test.only`, `test.skip` bez uzasadnienia, zakomentowanego kodu.

## Zakres zmian
- [ ] PR zmienia tylko pliki testowe (lub uzasadnia zmianę w `src/`).
- [ ] Autor PR rozumie każdą linię i potrafi ją wyjaśnić.
