import { findMissing } from './missing-term';

describe('find missing', () => {
    test("findMissing([1, 3, 5, 9, 11]) should return 7", () => {
        expect(findMissing([1, 3, 5, 9, 11])).toBe(7);
    });

    test("findMissing([1, 3, 4]) should return 2", () => {
        expect(findMissing([1, 3, 4])).toBe(2);
    });
});
