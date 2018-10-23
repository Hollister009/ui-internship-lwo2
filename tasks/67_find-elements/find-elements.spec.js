import { findElement } from './find-elements';

describe('Find element', () => {

    test('findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8', () => {
        expect(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })).toBe(8);
    });

    test('findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined', () => {
        expect(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })).toBe(undefined);
    });

});
