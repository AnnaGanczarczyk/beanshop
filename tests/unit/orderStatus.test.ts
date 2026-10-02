import { describe, expect, it } from 'vitest';
import { canTransition } from '../../src/domain/orderStatus';

describe('orderStatus (BR-09)', () => {
  it.each([
    ['NEW', 'PAID'],
    ['PAID', 'SHIPPED'],
    ['SHIPPED', 'DELIVERED'],
    ['NEW', 'CANCELLED'],
  ] as const)('pozwala na %s -> %s', (from, to) => {
    expect(canTransition(from, to)).toBe(true);
  });

  it('nie pozwala zmienic statusu dostarczonego zamowienia', () => {
    expect(canTransition('DELIVERED', 'CANCELLED')).toBe(false);
  });
});
