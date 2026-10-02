# Instrukcje dla GitHub Copilot: repozytorium BeanShop

## O projekcie
BeanShop to mały sklep internetowy z kawą (Node.js + Express + TypeScript, frontend w czystym HTML/JS).
Repozytorium służy do szkoleń "GitHub Copilot dla testera manualnego" i "GitHub Copilot dla testera automatyzującego".

- Wymagania i reguły biznesowe (BR-xx): `docs/wymagania.md`. To jest źródło prawdy. Kod może zawierać błędy.
- Architektura i przepływy: `docs/architektura.md`. Skrót API: `docs/api.md`.
- Logika biznesowa: `src/domain/`. Endpointy: `src/routes/`. Dane startowe: `src/store.ts`.

## Zasady odpowiedzi
- Odpowiadaj po polsku.
- Gdy opisujesz działanie systemu, wskazuj plik i funkcję, na których się opierasz.
- Gdy kod i `docs/wymagania.md` są niezgodne, powiedz o tym wprost i podaj numer reguły BR-xx. Nie zakładaj, że kod ma rację.
- Jeśli czegoś nie ma w repozytorium, napisz "nie znalazłem tego w repozytorium" zamiast zgadywać.
- Nie używaj prawdziwych danych osobowych. Dane testowe: domena `@beanshop.test`.

## Testy: wspólne konwencje
- Nazwy testów po polsku, opisują zachowanie ("nalicza darmową dostawę od 200 zł").
- Każdy test sprawdza jedną regułę i odwołuje się do niej w nazwie lub komentarzu (np. `// BR-04`).
- Asercje sprawdzają konkretne wartości. Zakaz asercji typu `toBeDefined()` / `toBeTruthy()` jako jedynego sprawdzenia.
- Gdy test wykrywa niezgodność z wymaganiami, NIE poprawiaj testu pod aktualne zachowanie aplikacji. Oznacz go `test.fail()` z komentarzem `// BUG: <opis>, BR-xx` i zaproponuj zgłoszenie.
