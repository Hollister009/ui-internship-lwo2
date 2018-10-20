import { findFriend } from './find-friend';

describe('find-friend', () => {
    test(`findFriend(['blue', 'blue', 'red', 'red', 'blue', 'green']) should return 1`, () => {
        expect(findFriend(['blue', 'blue', 'red', 'red', 'blue', 'green'])).toBe(1);
    });

    test(`findFriend(['blue', 'red', 'blue', 'blue', 'red', 'blue', 'red']) should return 2`, () => {
        expect(findFriend(['blue', 'red', 'blue', 'blue', 'red', 'blue', 'red'])).toBe(2);
    });

    test(`findFriend(['brown', 'brown', 'red', 'green']) should return 0`, () => {
        expect(findFriend(['brown', 'brown', 'red', 'green'])).toBe(0);
    });

    test(`findFriend(['red', 'blue', 'blue', 'red'] should return 2`, () => {
        expect(findFriend(['red', 'blue', 'blue', 'red'])).toBe(2);
    });

    test(`findFriend(['red', 'blue']) should return 0`, () => {
        expect(findFriend(['red', 'blue'])).toBe(0);
    });

    test(`findFriend(['blue', 'green', 'red', 'green', 'blue', 'blue', 'red']) should return 1;`, () => {
        expect(findFriend(['blue', 'green', 'red', 'green', 'blue', 'blue', 'red'])).toBe(1);
    });

    test(`findFriend(['blue', 'blue','blue','blue','blue','blue','blue']) should return 0`, () => {
        expect(findFriend(['blue', 'blue','blue','blue','blue','blue','blue'])).toBe(0);
    });
});
