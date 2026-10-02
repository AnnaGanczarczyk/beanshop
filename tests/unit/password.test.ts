import { describe, expect, it } from 'vitest';
import { validatePassword } from '../../src/domain/password';

describe('validatePassword (BR-01)', () => {
  it('akceptuje poprawne haslo', () => {
    expect(validatePassword('Kawa1234').valid).toBe(true);
  });

  it('odrzuca za krotkie haslo', () => {
    expect(validatePassword('Kaw1').valid).toBe(false);
  });

  it('wymaga cyfry', () => {
    expect(validatePassword('KawaKawa').errors).toContain('Hasło musi zawierać cyfrę');
  });
});
