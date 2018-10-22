import { runningAverage } from './running-average';

describe('running-average', () => {
    const rAvg = runningAverage();

    test(`should return a function`, () => {
        expect(typeof rAvg).toBe('function');
    });

    test(`should return 10)`, () => {
        expect(rAvg(10)).toBe(10);
    });

    test(`should return 10.5`, () => {
        expect(rAvg(11)).toBe(10.5);
    });

    test(`should return 11`, () => {
        expect(rAvg(12)).toBe(11);
    });
});