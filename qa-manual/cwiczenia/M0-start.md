# M0. Start: Copilot oczami testera manualnego (30 min)

**Cel:** uruchomić środowisko i zobaczyć różnicę między czatem "bez kontekstu" a Copilotem w repozytorium.

## Kroki

1. **Codespace.** Na stronie repozytorium: `Code` -> `Codespaces` -> `Create codespace on main`. Po ok. 2 minutach otworzy się VS Code w przeglądarce, a aplikacja BeanShop wystartuje sama (zakładka `Ports`, port 3000, ikona globusa).
2. **Aplikacja.** Zaloguj się jako `anna@beanshop.test` / `Kawa1234!`. Dodaj coś do koszyka. Konta testowe: `docs/wymagania.md`.
3. **Ten sam prompt w trzech miejscach.** Zadaj pytanie: *"Od jakiej kwoty dostawa w BeanShop jest darmowa i czy dotyczy to także kuriera express?"*
   - a) w dowolnym czacie AI bez dostępu do repo (jeśli masz),
   - b) w Copilot Chat na github.com (ikona Copilota na stronie repozytorium),
   - c) w Codespace: panel Chat, wybierz agenta **analityk-qa** z listy agentów.
4. Porównaj odpowiedzi: czy podają źródło (plik)? Czy odróżniają kod od wymagań?
5. **Twój folder.** W Codespace utwórz `qa-manual/uczestnicy/<twój-login>/notatki.md` i zapisz w nim wnioski z punktu 4.
6. **Twój branch.** Panel Source Control -> `...` -> `Branch` -> `Create branch` -> `m/<twój-login>`. Commit (wiadomość możesz wygenerować ikoną Copilota) i `Publish Branch`.

## Gotowe, gdy
- [ ] Aplikacja działa w Twoim Codespace.
- [ ] Na branchu `m/<login>` jest plik `notatki.md` z porównaniem trzech odpowiedzi.
