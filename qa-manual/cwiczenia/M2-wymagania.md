# M2. Analiza wymagań i testowalności (45 min)

**Cel:** znaleźć dziury w wymaganiach, zanim staną się błędami w kodzie. Pracujemy w parach.

## 2.1 Ocena testowalności (15 min)

Otwórz issues z etykietą `user-story`. Dla **US-03 (wyszukiwanie)** i **US-06 (dostawa)** poproś Copilota:

> *"Oceń historyjkę #<nr> pod kątem testowalności: kryteria INVEST, niejednoznaczne słowa, brakujące kryteria akceptacji, przypadki, których nie opisano. Porównaj z `docs/wymagania.md`. Wypisz pytania do Product Ownera."*

Krytycznie oceń wynik: które pytania są naprawdę ważne dla ryzyka, a które to "szum"?

## 2.2 Example Mapping dla US-05 kody rabatowe (20 min)

Example Mapping to krótka technika warsztatowa (BDD): **reguły** (żółte kartki), **przykłady** (zielone), **pytania** (czerwone).

1. Poproś Copilota o mapę w formie tabeli Markdown: kolumny = reguły z BR-05..BR-07, pod każdą 2-4 konkretne przykłady (koszyk, kod, oczekiwana kwota), na dole pytania.
2. W parze sprawdźcie każdy przykład ręcznie z wymaganiami. Przelicz kwoty.
3. Dopiszcie przykłady, które przyszły Wam do głowy, a których Copilot nie dał. Zwróćcie uwagę na: dwa kody po kolei, zmianę koszyka po zastosowaniu kodu, ostatni dzień ważności.

## 2.3 Kryteria akceptacji w Gherkinie (10 min)

Przepisz kryteria US-03 na scenariusze `Given / When / Then` (po polsku: `Zakładając / Gdy / Wtedy`) z konkretnymi danymi. Poproś Copilota o pierwszą wersję, potem usuń scenariusze bez wartości i dodaj brakujące.

Wklej wynik jako **komentarz w issue US-03** (pytania do PO + scenariusze). Zacznij komentarz od `[grupa-M] @<login>`.

## Gotowe, gdy
- [ ] Komentarz w issue US-03 z pytaniami i scenariuszami Gherkin.
- [ ] `qa-manual/uczestnicy/<login>/example-mapping-US-05.md`.
