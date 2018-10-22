import { translatePigLatin } from './pig-latin';

describe('Pig Latin', () => {

    test('translatePigLatin("california") should return "aliforniacay"', () => {
        expect(translatePigLatin("california")).toBe("aliforniacay");
    });

    test('translatePigLatin("paragraphs") should return "aragraphspay"', () => {
        expect(translatePigLatin("paragraphs")).toBe("aragraphspay");
    });

    test('translatePigLatin("glove") should return "oveglay"', () => {
        expect(translatePigLatin("glove")).toBe("oveglay");
    });

    test('translatePigLatin("algorithm") should return "algorithmway"', () => {
        expect(translatePigLatin("algorithm")).toBe("algorithmway");
    });

    test('translatePigLatin("eight") should return "eightway"', () => {
        expect(translatePigLatin("eight")).toBe("eightway");
    });
});
