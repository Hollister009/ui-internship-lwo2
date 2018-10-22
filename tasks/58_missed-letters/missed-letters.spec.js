import { findLetter } from './missed-letters';


describe('Missed letter', () => {

    test('findLetter("abce") should return "d".', () => {
        expect(findLetter("abce")).toBe("d");
    });

    test('findLetter("abcdefghjklmno") should return "i".', () => {
        expect(findLetter("abcdefghjklmno")).toBe("i");
    });

    test('findLetter("bcd") should return undefined.', () => {
        expect(findLetter("bcd")).toBe(undefined);
    });

    test('findLetter("yz") should return undefined.', () => {
        expect(findLetter("yz")).toBe(undefined);
    });
});
