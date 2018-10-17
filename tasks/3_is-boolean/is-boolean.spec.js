import {isBoolean} from './is-boolean';

describe('is-boolean', () => {
  test('isBoolean(true) should return true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  test('isBoolean(false) should return true', () => {
    expect(isBoolean(false)).toBe(true);
  });

  test('isBoolean([1, 2, 3]) should return false', () => {
    expect(isBoolean([1, 2, 3])).toBe(false);
  });

  test('isBoolean([].slice) should return false', () => {
    expect(isBoolean([].slice)).toBe(false);
  });

  test('isBoolean({a: 1}) should return false', () => {
    expect(isBoolean({a: 1})).toBe(false);
  });

  test('isBoolean(1) should return false', () => {
    expect(isBoolean(1)).toBe(false);
  });

  test('isBoolean(NaN) should return false', () => {
    expect(isBoolean(NaN)).toBe(false);
  });

  test('isBoolean("a") should return false', () => {
    expect(isBoolean('a')).toBe(false);
  });

  test('isBoolean("true") should return false', () => {
    expect(isBoolean('true')).toBe(false);
  });

  test('isBoolean("false") should return false', () => {
    expect(isBoolean('false')).toBe(false);
  });
});
