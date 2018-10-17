import {golfScore, GOLF_SCORES} from './golf-score';

describe('golf-score', () => {
  test(`should return: ${GOLF_SCORES.HOLE_IN_ONE}`, () => {
    expect(golfScore(4, 1)).toBe(GOLF_SCORES.HOLE_IN_ONE);
  });

  test(`should return: ${GOLF_SCORES.EAGLE}`, () => {
    expect(golfScore(4, 2)).toBe(GOLF_SCORES.EAGLE);
  });

  test(`should return: ${GOLF_SCORES.EAGLE}`, () => {
    expect(golfScore(5, 2)).toBe(GOLF_SCORES.EAGLE);
  });

  test(`should return: ${GOLF_SCORES.BIRDIE}`, () => {
    expect(golfScore(4, 3)).toBe(GOLF_SCORES.BIRDIE);
  });

  test(`should return: ${GOLF_SCORES.PAR}`, () => {
    expect(golfScore(4, 4)).toBe(GOLF_SCORES.PAR);
  });

  test(`should return: ${GOLF_SCORES.HOLE_IN_ONE}`, () => {
    expect(golfScore(1, 1)).toBe(GOLF_SCORES.HOLE_IN_ONE);
  });

  test(`should return: ${GOLF_SCORES.PAR}`, () => {
    expect(golfScore(5, 5)).toBe(GOLF_SCORES.PAR);
  });

  test(`should return: ${GOLF_SCORES.BOGEY}`, () => {
    expect(golfScore(4, 5)).toBe(GOLF_SCORES.BOGEY);
  });

  test(`should return: ${GOLF_SCORES.DOUBLE_BOGEY}`, () => {
    expect(golfScore(4, 6)).toBe(GOLF_SCORES.DOUBLE_BOGEY);
  });

  test(`should return: ${GOLF_SCORES.GO_HOME}`, () => {
    expect(golfScore(4, 7)).toBe(GOLF_SCORES.GO_HOME);
  });

  test(`should return: ${GOLF_SCORES.GO_HOME}`, () => {
    expect(golfScore(5, 9)).toBe(GOLF_SCORES.GO_HOME);
  });
});
