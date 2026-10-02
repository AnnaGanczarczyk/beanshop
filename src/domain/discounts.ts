export type DiscountType = 'PERCENT' | 'FIXED';

export interface DiscountCode {
  code: string;
  type: DiscountType;
  value: number;
  /** Minimalna wartosc produktow (zl), od ktorej kod dziala. */
  minSubtotal?: number;
  /** Ostatni dzien waznosci (wlacznie), format YYYY-MM-DD. */
  validUntil?: string;
}

export const DISCOUNT_CODES: DiscountCode[] = [
  { code: 'KAWA10', type: 'PERCENT', value: 10 },
  { code: 'MINUS20', type: 'FIXED', value: 20, minSubtotal: 100 },
  { code: 'JESIEN15', type: 'PERCENT', value: 15, validUntil: '2026-11-30' },
  { code: 'LATO25', type: 'PERCENT', value: 25, validUntil: '2026-08-31' },
];

export type CodeCheck =
  | { ok: true; discount: DiscountCode }
  | { ok: false; reason: 'UNKNOWN' | 'EXPIRED' | 'MIN_SUBTOTAL' };

export function findDiscount(code: string, subtotal: number, now: Date): CodeCheck {
  const normalized = code.trim().toUpperCase();
  const discount = DISCOUNT_CODES.find((d) => d.code === normalized);
  if (!discount) return { ok: false, reason: 'UNKNOWN' };
  if (discount.validUntil && !(now < new Date(`${discount.validUntil}T00:00:00`))) {
    return { ok: false, reason: 'EXPIRED' };
  }
  if (discount.minSubtotal !== undefined && subtotal < discount.minSubtotal) {
    return { ok: false, reason: 'MIN_SUBTOTAL' };
  }
  return { ok: true, discount };
}
