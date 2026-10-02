export type OrderStatus = 'NEW' | 'PAID' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';

/** BR-07: dozwolone przejscia statusow zamowienia. */
const TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  NEW: ['PAID', 'CANCELLED'],
  PAID: ['SHIPPED', 'CANCELLED'],
  SHIPPED: ['DELIVERED', 'CANCELLED'],
  DELIVERED: [],
  CANCELLED: [],
};

export function canTransition(from: OrderStatus, to: OrderStatus): boolean {
  return TRANSITIONS[from].includes(to);
}

export function allowedNext(from: OrderStatus): OrderStatus[] {
  return [...TRANSITIONS[from]];
}
