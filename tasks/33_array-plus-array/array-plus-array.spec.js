import { arrayPlusArray } from './array-plus-array';

describe('array-plus-array', () => {
    test(`arrayPlusArray([1, 1, 1], [2, 2, 2]) should return [3, 3, 3]`, () => {
        expect(arrayPlusArray([1, 1, 1], [2, 2, 2])).toEqual([3, 3, 3]);
    });

    test(`arrayPlusArray([0, 1, 2], [2, 3]) should return [2, 4, 2]`, () => {
        expect(arrayPlusArray([0, 1, 2], [2, 3])).toEqual([2, 4, 2]);
    });

    test(`arrayPlusArray([0, 1], [2, 3, 7]) should return [2, 4, 7]`, () => {
        expect(arrayPlusArray([0, 1], [2, 3, 7])).toEqual([2, 4, 7]);
    });
});