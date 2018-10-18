import { getIndexToInsert } from './index-to-insert';

describe('index-to-insert', () => {
    test('getIndexToInsert([10, 20, 30, 40, 50], 35) should return 3', () => {
        expect(getIndexToInsert([10, 20, 30, 40, 50], 35)).toBe(3);
    });

    test('getIndexToInsert([10, 20, 30, 40, 50], 30) should return 2', () => {
        expect(getIndexToInsert([10, 20, 30, 40, 50], 30)).toBe(2);
    });

    test('getIndexToInsert([40, 60], 50) should return 1', () => {
        expect(getIndexToInsert([40, 60], 50)).toBe(1);
    });

    test('getIndexToInsert([3, 10, 5], 3) should return 0', () => {
        expect(getIndexToInsert([3, 10, 5], 3)).toBe(0);
    });

    test('getIndexToInsert([5, 3, 20, 3], 5) should return 2', () => {
        expect(getIndexToInsert([5, 3, 20, 3], 5)).toBe(2);
    });

    test('getIndexToInsert([2, 20, 10], 19) should return 2', () => {
        expect(getIndexToInsert([2, 20, 10], 19)).toBe(2);
    });

    test('getIndexToInsert([2, 5, 10], 15) should return 3', () => {
        expect(getIndexToInsert([2, 5, 10], 15)).toBe(3);
    });
});