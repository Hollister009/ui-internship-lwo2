import { reverseStringInRange } from './reverse-string-in-range';

describe('reverse-string-in-range', () => {
    test(`reverseStringInRange("codewars", [1, 5]) should return "cawedors"`, () => {
        expect(reverseStringInRange("codewars", [1, 5])).toBe('cawedors');
    });

    test(`reverseStringInRange("codingIsFun", [2, 100]) should return "conuFsIgnid"`, () => {
        expect(reverseStringInRange("codingIsFun", [2, 100])).toBe('conuFsIgnid');
    });

    test(`reverseStringInRange("FunctionalProgramming", [2, 15]) should return "FuargorPlanoitcnmming"`, () => {
        expect(reverseStringInRange("FunctionalProgramming", [2, 15])).toBe('FuargorPlanoitcnmming');
    });

    test(`reverseStringInRange("abcdefghijklmnopqrstuvwxyz", [0, 20]) should return "utsrqponmlkjihgfedcbavwxyz"`, () => {
        expect(reverseStringInRange("abcdefghijklmnopqrstuvwxyz", [0, 20])).toBe('utsrqponmlkjihgfedcbavwxyz');
    });

    test(`reverseStringInRange("abcdefghijklmnopqrstuvwxyz", [5, 20]) should return "abcdeutsrqponmlkjihgfvwxyz"`, () => {
        expect(reverseStringInRange("abcdefghijklmnopqrstuvwxyz", [5, 20])).toBe('abcdeutsrqponmlkjihgfvwxyz');
    });
});