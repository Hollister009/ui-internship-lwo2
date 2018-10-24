import { expressionMatter } from './expressions-matter';

describe('Expressions matter', () => {

    test('expressionMatter(2, 1, 2) should return 6', () => {
        expect(expressionMatter(2, 1, 2)).toBe(6);
    });

    test('expressionMatter(2, 1, 1) should return 4', () => {
        expect(expressionMatter(2, 1, 1)).toBe(4);
    });

    test('expressionMatter(1, 1, 1) should return 3', () => {
        expect(expressionMatter(1, 1, 1)).toBe(3);
    });

    test('expressionMatter(1, 2, 3) should return 9', () => {
        expect(expressionMatter(1, 2, 3)).toBe(9);
    });

    test('expressionMatter(1, 3, 1) should return 6', () => {
        expect(expressionMatter(1, 3, 1)).toBe(6);
    });

    test('expressionMatter(2, 2, 2) should return 8', () => {
        expect(expressionMatter(2, 2, 2)).toBe(8);
    });

    test('expressionMatter(5, 1, 3) should return 20', () => {
        expect(expressionMatter(5, 1, 3)).toBe(20);
    });

    test('expressionMatter(3, 5, 7) should return 105', () => {
        expect(expressionMatter(3, 5, 7)).toBe(105);
    });

    test('expressionMatter(5, 6, 1) should return 36', () => {
        expect(expressionMatter(5, 6, 1)).toBe(36);
    });

    test('expressionMatter(1, 6, 1) should return 12', () => {
        expect(expressionMatter(1, 6, 1)).toBe(12);
    });

    test('expressionMatter(2, 6, 1) should return 18', () => {
        expect(expressionMatter(2, 6, 1)).toBe(18);
    });

    test('expressionMatter(6, 7, 1) should return 49', () => {
        expect(expressionMatter(6, 7, 1)).toBe(49);
    });

    test('expressionMatter(1, 8, 3) should return 32', () => {
        expect(expressionMatter(1, 8, 3)).toBe(32);
    });

    test('expressionMatter(9, 7, 2) should return 126', () => {
        expect(expressionMatter(9, 7, 2)).toBe(126);
    });

    test('expressionMatter(9, 1, 1) should return 18', () => {
        expect(expressionMatter(9, 1, 1)).toBe(18);
    });

    test('expressionMatter(10, 5, 6) should return 300', () => {
        expect(expressionMatter(10, 5, 6)).toBe(300);
    });

    test('expressionMatter(1, 10, 1) should return 20', () => {
        expect(expressionMatter(1, 10, 1)).toBe(20);
    });
});
