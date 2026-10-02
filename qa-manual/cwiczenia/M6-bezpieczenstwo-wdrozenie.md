# M6. Bezpieczeństwo, ograniczenia i wdrożenie (50 min)

## 6.1 Kiedy Copilot zmyśla (15 min)

Zadaj pytania i **sam zweryfikuj** odpowiedzi w repozytorium:

1. *"Ile dni ma klient BeanShop na zwrot towaru i jak działa procedura zwrotu?"*
2. *"Jaki jest limit użyć kodu KAWA10 na jednego klienta?"*
3. *"Czy aplikacja jest zabezpieczona przed XSS? Podaj miejsca w kodzie."*
4. *"Ile wynosi VAT doliczany w koszyku?"*

Dla każdej odpowiedzi oceń: prawda / częściowo / zmyślone. Ustal swoje **zasady weryfikacji** (np. "zawsze proszę o plik i linię", "kwoty przeliczam sam", "brak źródła = brak faktu") i zapisz je w `notatki.md`.

## 6.2 Dane wrażliwe i content exclusion (10 min)

Demonstracja trenera:
- Co Copilot "widzi": otwarte pliki, repozytorium, Space, issues. Czego nie widzi: Twojej bazy produkcyjnej, plików wykluczonych.
- **Content exclusion** (ustawienia repozytorium lub organizacji -> Copilot -> Content exclusion): wykluczenie np. `/secrets/**`, `**/*.env`, `/data/klienci/**`.
- Zasada: do promptów nie trafiają dane osobowe z produkcji, logi z danymi klientów ani hasła. Dane testowe tylko syntetyczne (`@beanshop.test`).

Pytanie do dyskusji: co w Waszym projekcie powinno trafić do content exclusion?

## 6.3 Twoja biblioteka promptów QA (15 min)

1. Wybierz 3 prompty, które dziś dały najlepszy wynik (Twoje lub startowe `m-*`).
2. Popraw je na podstawie doświadczeń z dnia (np. dopisz "przelicz kwoty", "podaj źródło").
3. Zapisz jako pliki `qa-manual/uczestnicy/<login>/prompty/<nazwa>.prompt.md`. W swoim projekcie wystarczy je skopiować do `.github/prompts/`, żeby cały zespół wywoływał je przez `/nazwa`.

## 6.4 Plan wdrożenia w moim projekcie (10 min)

Wypełnij `qa-manual/szablony/plan-wdrozenia.md` i zapisz jako `qa-manual/uczestnicy/<login>/plan-wdrozenia.md`. Commit i push.

## Gotowe, gdy
- [ ] Zasady weryfikacji w `notatki.md`.
- [ ] 3 pliki `.prompt.md` i plan wdrożenia na Twoim branchu.
