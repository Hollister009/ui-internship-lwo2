import { uniqueInOrder } from './unique-in-order';

describe('unique-in-order', () => {
    test(`uniqueInOrder('AAAABBBCCDAABBB') should return ['A', 'B', 'C', 'D', 'A', 'B']`, () => {
        expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
    });

    test(`uniqueInOrder('ABBCcAD') should return ['A', 'B', 'C', 'c', 'A', 'D']`, () => {
        expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
    });

    test(`uniqueInOrder([1,2,2,3,3]) should return [1,2,3]`, () => {
        expect(uniqueInOrder([1,2,2,3,3])).toEqual([1,2,3]);
    });

    test(`should work with empty array`, () => {
        expect(uniqueInOrder([])).toEqual([]);
    });

    test(`should work with one element`, () => {
        expect(uniqueInOrder(['A'])).toEqual(['A']);
    });
});
