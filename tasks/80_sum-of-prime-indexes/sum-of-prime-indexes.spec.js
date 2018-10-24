import { sumPrimeIndexedElements } from './sum-of-prime-indexes';

describe('Sum of prime indexes', () => {
    
    test("sumPrimeIndexedElements([]) should return 0", () => {
        expect(sumPrimeIndexedElements([])).toBe(0);
    });

    test("sumPrimeIndexedElements([1, 2, 3, 4]) should return 7", () => {
        expect(sumPrimeIndexedElements([1, 2, 3, 4])).toBe(7);
    });

    test("sumPrimeIndexedElements([1, 2, 3, 4, 5, 6]) should return 13", () => {
        expect(sumPrimeIndexedElements([1, 2, 3, 4, 5, 6])).toBe(13);
    });

    test("sumPrimeIndexedElements([1, 2, 3, 4, 5, 6, 7, 8]) should return 21", () => {
        expect(sumPrimeIndexedElements([1, 2, 3, 4, 5, 6, 7, 8])).toBe(21);
    });

    test("sumPrimeIndexedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) should return 21", () => {
        expect(sumPrimeIndexedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(21);
    });

    test("sumPrimeIndexedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]) should return 33", () => {
        expect(sumPrimeIndexedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])).toBe(33);
    });

    test("sumPrimeIndexedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) should return 47", () => {
        expect(sumPrimeIndexedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toBe(47);
    });
});
