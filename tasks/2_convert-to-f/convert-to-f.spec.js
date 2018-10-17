import {convertToF} from './convert-to-f';

describe('convert-to-f', () => {
  test('should return number', () => {
    expect(typeof convertToF(0)).toBe('number');
  });

  test('should return: -22', () => {
    expect(convertToF(-30)).toBe(-22);
  });

  test('should return: 14', () => {
    expect(convertToF(-10)).toBe(14);
  });
});
