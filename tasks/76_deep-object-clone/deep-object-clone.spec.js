import { deepClone } from './deep-object-clone';

describe('Deep object clone', () => {

    test("deepClone({}) should return an object", () => {
        expect(typeof deepClone({})).toBe('object');
    });

    test("Copy not equal origin", () => {
        const origin = { a: 1, b: { c:10 } };
        const copy = deepClone(origin);
        expect(origin).not.toBe(copy);
    });

    test("Change of copy params should not affect origin params", () => {
        const origin = { a: 1, b: { c:10 } };
        const copy = deepClone(origin);
        copy.b.c = 12;
        expect(origin.b.c).not.toBe(copy.b.c);
    });
});
