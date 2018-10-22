import { sortByBits } from './sort-by-bits';

describe('sort-by-bits', () => {
    test(`sortByBits([3, 8, 3, 6, 5, 7, 9, 1]) should return [1, 8, 3, 3, 5, 6, 9, 7]`, () => {
        expect(sortByBits([3, 8, 3, 6, 5, 7, 9, 1])).toEqual([1, 8, 3, 3, 5, 6, 9, 7]);
    });

    test(`sortByBits([9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0]) should return [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]`, () => {
        expect(sortByBits([9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0])).toEqual([0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);
    });
});