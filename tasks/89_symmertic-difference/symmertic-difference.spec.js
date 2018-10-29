import { sym } from './symmertic-difference';

describe('Symmetric Difference', () => {

    test('sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5]', () => {
        expect(JSON.stringify(sym([1, 2, 3], [5, 2, 1, 4]))).toBe(JSON.stringify([3, 4, 5]));
    });

    test('sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements', () => {
        expect(sym([1, 2, 3], [5, 2, 1, 4]).length).toBe(3);
    });

    test('sym([1, 2, 5], [2, 3, 5], [3, 4, 5])should return [1, 4, 5]', () => {
        expect(JSON.stringify(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))).toBe(JSON.stringify([1, 4, 5]));
    });

    test('sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements', () => {
        expect(sym([1, 2, 3], [5, 2, 1, 4]).length).toBe(3);
    });

    test('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])should return [1, 4, 5]', () => {
        expect(JSON.stringify(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))).toBe(JSON.stringify([1, 4, 5]));
    });

    test('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements', () => {
        expect(sym([1, 2, 3], [5, 2, 1, 4]).length).toBe(3);
    });

    test('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])should return [2, 3, 4, 6, 7]', () => {
        expect(JSON.stringify(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))).toBe(JSON.stringify([2, 3, 4, 6, 7]));
    });

    test('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements', () => {
        expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length).toBe(5);
    });

    test('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])should return [1, 2, 4, 5, 6, 7, 8, 9]', () => {
        expect(JSON.stringify(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))).toBe(JSON.stringify([1, 2, 4, 5, 6, 7, 8, 9]));
    });

    test('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements', () => {
        expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length).toBe(8);
    });

});
