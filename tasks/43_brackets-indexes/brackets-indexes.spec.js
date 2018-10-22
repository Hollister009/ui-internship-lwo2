import { findCloseIndex } from './brackets-indexes';

describe('brackets-indexes', () => {
  it('should return correct values', () => {
    expect(findCloseIndex('((1)23(45))(aB)', 1)).toBe(3);
    expect(findCloseIndex('((1)23(45))(aB)', 2)).toBe(-1);
    expect(findCloseIndex('((1)23(45))(aB)', 6)).toBe(9);
    expect(findCloseIndex('((1)23(45))(aB)', 0)).toBe(10);
    expect(findCloseIndex('((1)23(45))(aB)', 11)).toBe(14);
    expect(findCloseIndex('(g(At)IO(f)(tM(qk)YF(n)Nr(E)))', 11)).toBe(28);
    expect(findCloseIndex('(g(At)IO(f)(tM(qk)YF(n)Nr(E)))', 0)).toBe(29);
    expect(findCloseIndex('(>_(va)`?(h)C(as)(x(hD)P|(fg)))', 19)).toBe(22);
  });
});