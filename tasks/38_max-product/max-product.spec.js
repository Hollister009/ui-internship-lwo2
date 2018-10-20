import { maxProduct } from './max-product';

describe('max-product', () => {
    test(`maxProduct([5, 8]) should return 40`, () => {
        expect(maxProduct([5, 8])).toBe(40);
    });

    test(`maxProduct([1, 2, 3]) should return 6`, () => {
        expect(maxProduct([1, 2, 3])).toBe(6);
    });

    test(`maxProduct([1, 5, 10, 9]) should return 90`, () => {
        expect(maxProduct([1, 5, 10, 9])).toBe(90);
    });

    test(`maxProduct([5, 1, 2, 3, 1, 4]) should return 6`, () => {
        expect(maxProduct([5, 1, 2, 3, 1, 4])).toBe(6);
    });

    test(`maxProduct([4, 12, 3, 1, 5]) should return 48`, () => {
        expect(maxProduct([4, 12, 3, 1, 5])).toBe(48);
    });

    test(`maxProduct([3, 6, -2, -5, 7, 3]) should return 21`, () => {
        expect(maxProduct([3, 6, -2, -5, 7, 3])).toBe(21);
    });

    test(`maxProduct([9, 5, 10, 2, 24, -1, -48]) should return 50`, () => {
        expect(maxProduct([9, 5, 10, 2, 24, -1, -48])).toBe(50);
    });

    test(`maxProduct([5, 6, -4, 2, 3, 2, -23]) should return 30`, () => {
        expect(maxProduct([5, 6, -4, 2, 3, 2, -23])).toBe(30);
    });

    test(`maxProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]) should return -14`, () => {
        expect(maxProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])).toBe(-14);
    });

    test(`maxProduct([1, 0, 1, 0, 1000]) should return 0`, () => {
        expect(maxProduct([1, 0, 1, 0, 1000])).toBe(0);
    });

    test(`maxProduct([1, 2, 3, 0]) should return 6`, () => {
        expect(maxProduct([1, 2, 3, 0])).toBe(6);
    });
});
