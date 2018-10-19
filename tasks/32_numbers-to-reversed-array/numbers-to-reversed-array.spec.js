import { numberToReversedArray } from './numbers-to-reversed-array';

describe('numbers-to-reversed-array', () => {
    test(`numberToReversedArray(348597) should return [7, 9, 5, 8, 4, 3]`, () => {
        expect(numberToReversedArray(348597)).toEqual([7, 9, 5, 8, 4, 3]);
    });

    test(`numberToReversedArray(20182005) should return [5, 0, 0, 2, 8, 1, 0, 2]`, () => {
        expect(numberToReversedArray(20182005)).toEqual([5, 0, 0, 2, 8, 1, 0, 2]);
    });
});