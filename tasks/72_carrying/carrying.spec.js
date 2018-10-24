import { addTogether } from './carrying';

describe('carrying', () => {
    test('addTogether(2, 3) should return 5', () => {
        expect(addTogether(2, 3)).toBe(5);
    });

    test(`addTogether(2)(3) should return 5`, () => {
        expect(addTogether(2)(3)).toBe(5);
    });

    test(`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined`, () => {
        expect(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")).toBe(undefined);
    });

    test(`addTogether(2, "3") should return undefined`, () => {
        expect(addTogether(2, "3")).toBe(undefined);
    });

    test(`addTogether(2)([3]) should return undefined`, () => {
        expect(addTogether(2)([3])).toBe(undefined);
    });
});
