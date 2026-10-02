/** Zaokraglenie kwoty do 0,01 zl (half-up). */
export function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}
