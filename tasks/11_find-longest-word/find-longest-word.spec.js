import { findLongestWord } from './find-longest-word';

describe('find-longest-word', () => {
    test('findLongestWord("The quick brown fox jumped over the lazy dog") should return a number', () => {
        expect(typeof findLongestWord("The quick brown fox jumped over the lazy dog")).toBe('number');
    });

    test('findLongestWord("The quick brown fox jumped over the lazy dog")', () => {
        expect(findLongestWord("The quick brown fox jumped over the lazy dog")).toBe(6);
    });

    test('findLongestWord("May the force be with you")', () => {
        expect(findLongestWord("May the force be with you")).toBe(5);
    });

    test('findLongestWord("Google do a barrel roll")', () => {
        expect(findLongestWord("Google do a barrel roll")).toBe(6);
    });

    test('findLongestWord("What is the average airspeed velocity of an unladen swallow")', () => {
        expect(findLongestWord("What is the average airspeed velocity of an unladen swallow")).toBe(8);
    });

    test('findLongestWord("What if we try a super-long word such as otorhinolaryngology")', () => {
        expect(findLongestWord("What if we try a super-long word such as otorhinolaryngology")).toBe(19);
    });
});