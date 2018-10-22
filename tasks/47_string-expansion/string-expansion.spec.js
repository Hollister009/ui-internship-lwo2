import { stringExpansion } from './string-expansion';

describe('String expansion', () => {

    test("stringExpansion('3D2a5d2f') === 'DDDaadddddff'", () => {
        expect(stringExpansion('3D2a5d2f')).toBe("DDDaadddddff");
    });

    test("stringExpansion('3abc') === 'aaabbbccc'", () => {
        expect(stringExpansion('3abc')).toBe("aaabbbccc");
    });

    test("stringExpansion('3d332f2a') === 'dddffaa'", () => {
        expect(stringExpansion('3d332f2a')).toBe("dddffaa");
    });

    test("stringExpansion('abcde') === 'abcde'", () => {
        expect(stringExpansion('abcde')).toBe("abcde");
    });

    test("stringExpansion('') === ''", () => {
        expect(stringExpansion('')).toBe("");
    });

});
