import {factorialize} from './factorize-number';

describe('factorize-number', () => {
  test('should return a number.', () => {
    expect(typeof factorialize(5)).toBe('number');
  });

  test('should return 120', () => {
    expect(factorialize(5)).toBe(120);
  });

  test('should return 3628800', () => {
    expect(factorialize(10)).toBe(3628800);
  });

  test('should return 2432902008176640000', () => {
    expect(factorialize(20)).toBe(2432902008176640000);
  });

  test('should return 1', () => {
    expect(factorialize(0)).toBe(1);
  });
});
