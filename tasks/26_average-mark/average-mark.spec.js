import { getAverage } from './average-mark';

describe('average-mark', () => {
    test(`getAverage([2,2,2,2]) should return 2`, () => {
        expect(getAverage([2,2,2,2])).toBe(2);
    });

    test('getAverage([1,2,3,4,5]) should return 3', () => {
        expect(getAverage([1,2,3,4,5])).toBe(3);
    });

    test(`getAverage([1,1,1,1,1,1,1,2]) should return 1`, () => {
        expect(getAverage([1,1,1,1,1,1,1,2])).toBe(1);
    });
});