import { smallestCommons } from './smaller-common-multiple';

describe('Smallest common multiple', () => {

    test('smallestCommons([1, 5]) should return a number', () => {
        expect(typeof smallestCommons([1, 5])).toBe('number');
    });

    test('smallestCommons([1, 5]) should return a 60', () => {
        expect(smallestCommons([1, 5])).toBe(60);
    });

    test('smallestCommons([5, 1]) should return a 60', () => {
        expect(smallestCommons([5, 1])).toBe(60);
    });

    test('smallestCommons([1, 13]) should return a 360360', () => {
        expect(smallestCommons([1, 13])).toBe(360360);
    });

    test('smallestCommons([23, 18]) should return a 6056820', () => {
        expect(smallestCommons([23, 18])).toBe(6056820);
    });

});
