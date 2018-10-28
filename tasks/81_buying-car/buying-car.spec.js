import { nbMonths } from './buying-car';

describe('Buying car', () => {

    test("nbMonths(2000, 8000, 1000, 1.5) should return [6, 766];", () => {
        const result = nbMonths(2000, 8000, 1000, 1.5);
        expect(result[0]).toBe(6);
        expect(result[1]).toBe(766);
    });

    test("nbMonths(12000, 8000, 1000, 1.5)  should return [0, 4000];", () => {
        const result = nbMonths(12000, 8000, 1000, 1.5);
        expect(result[0]).toBe(0);
        expect(result[1]).toBe(4000);
    });
});
