title: [FLAKY] Niestabilny test "licznik koszyka rosnie po dodaniu produktu"
labels: flaky,grupa-A
---
Test `tests/e2e/cart.spec.ts` › "licznik koszyka rosnie po dodaniu produktu" pada w CI w ok. 1 na 3 uruchomień. Lokalnie "u mnie działa".

```
Error: expect(received).toBe(expected)
Expected: "1"
Received: "0"
```

Do zbadania w ćwiczeniu **A3.2**. Proszę nie zwiększać timeoutów.
