import { repeatStringNumTimes } from './repeat-string';

describe('repeat-string', () => {
    test('repeatStringNumTimes("*", 3) should return "***"', () => {
        expect(repeatStringNumTimes("*", 3)).toBe('***');
    });

    test('repeatStringNumTimes("abc", 3) should return "abcabcabc"', () => {
        expect(repeatStringNumTimes("abc", 3)).toBe('abcabcabc');
    });

    test('repeatStringNumTimes("abc", 4) should return "abcabcabcabc"', () => {
        expect(repeatStringNumTimes('abc', 4)).toBe('abcabcabcabc');
    });

    test('repeatStringNumTimes("abc", 1) should return "abc".', () => {
        expect(repeatStringNumTimes("abc", 1)).toBe('abc');
    });

    test('repeatStringNumTimes("*", 8) should return "********"', () => {
        expect(repeatStringNumTimes("*", 8)).toBe('********');
    });

    test('repeatStringNumTimes("abc", -2) should return ""', () => {
        expect(repeatStringNumTimes("abc", -2)).toBe('');
    });
});