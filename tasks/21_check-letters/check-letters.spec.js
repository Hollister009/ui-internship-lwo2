import { checkLetters } from './check-letters';

describe('check-letters', () => {
    test('checkLetters(["hello", "hey"]) should return false', () => {
        expect(checkLetters(["hello", "hey"])).toBe(false);
    });

    test('checkLetters(["hello", "Hello"]) should return true', () => {
        expect(checkLetters(["hello", "Hello"])).toBe(true);
    });

    test('checkLetters(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true', () => {
        expect(checkLetters(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).toBe(true);
    });

    test('checkLetters(["Mary", "Army"]) should return true.', () => {
        expect(checkLetters(["Mary", "Army"])).toBe(true);
    });

    test('checkLetters(["Mary", "Aarmy"]) should return true', () => {
        expect(checkLetters(["Mary", "Aarmy"])).toBe(true);
    });

    test('checkLetters(["Alien", "line"]) should return true', () => {
        expect(checkLetters(["Alien", "line"])).toBe(true);
    });

    test('checkLetters(["floor", "for"]) should return true', () => {
        expect(checkLetters(["floor", "for"])).toBe(true);
    });

    test('checkLetters(["hello", "neo"]) should return false', () => {
        expect(checkLetters(["hello", "neo"])).toBe(false);
    });

    test('checkLetters(["voodoo", "no"]) should return false', () => {
        expect(checkLetters(["voodoo", "no"])).toBe(false);
    });
});