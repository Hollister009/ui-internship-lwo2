import { convertToRoman } from './roman-numbers-convert';

describe('Roman numbers converter', () => {

    test('convertToRoman(2) should return "II"', () => {
        expect(convertToRoman(2)).toBe("II");
    });

    test('convertToRoman(3) should return "III"', () => {
        expect(convertToRoman(3)).toBe("III");
    });

    test('convertToRoman(4) should return "IV"', () => {
        expect(convertToRoman(4)).toBe("IV");
    });

    test('convertToRoman(5) should return "V"', () => {
        expect(convertToRoman(5)).toBe("V");
    });

    test('convertToRoman(9) should return "IX"', () => {
        expect(convertToRoman(9)).toBe("IX");
    });

    test('convertToRoman(12) should return "XII"', () => {
        expect(convertToRoman(12)).toBe("XII");
    });

    test('convertToRoman(29) should return "XXIX"', () => {
        expect(convertToRoman(29)).toBe("XXIX");
    });

    test('convertToRoman(44) should return "XLIV"', () => {
        expect(convertToRoman(44)).toBe("XLIV");
    });

    test('convertToRoman(45) should return "XLV"', () => {
        expect(convertToRoman(45)).toBe("XLV");
    });

    test('convertToRoman(68) should return "LXVIII"', () => {
        expect(convertToRoman(68)).toBe("LXVIII");
    });

    test('convertToRoman(83) should return "LXXXIII"', () => {
        expect(convertToRoman(83)).toBe("LXXXIII");
    });

    test('convertToRoman(97) should return "XCVII"', () => {
        expect(convertToRoman(97)).toBe("XCVII");
    });

    test('convertToRoman(500) should return "D"', () => {
        expect(convertToRoman(500)).toBe("D");
    });

    test('convertToRoman(501) should return "DI"', () => {
        expect(convertToRoman(501)).toBe("DI");
    });

    test('convertToRoman(649) should return "DCXLIX"', () => {
        expect(convertToRoman(649)).toBe("DCXLIX");
    });

    test('convertToRoman(798) should return "DCCXCVIII"', () => {
        expect(convertToRoman(798)).toBe("DCCXCVIII");
    });

    test('convertToRoman(891) should return "DCCCXCI"', () => {
        expect(convertToRoman(891)).toBe("DCCCXCI");
    });
});
