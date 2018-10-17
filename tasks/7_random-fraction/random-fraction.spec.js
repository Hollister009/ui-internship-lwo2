import {randomFraction} from './random-fraction';

describe('random-fraction', () => {
  test('should return a number.', () => {
    expect(typeof randomFraction()).toBe('number');
  });

  test('should return decimal number', () => {
    expect(randomFraction() % 1).not.toBe(0);
  });

  test('should return random decimal number', () => {
    const n0 = randomFraction();

    expect(randomFraction()).not.toBe(n0);
  });
});
