import { numPrimorial } from './calculate_primoral_of_a_number';

describe('Calculate Primorial Of a Number', () => {

    test("numPrimorial(6) should return 30030", () => {
        expect(numPrimorial(6)).toBe(30030);
    });

    test("numPrimorial(5) should return 2310", () => {
        expect(numPrimorial(5)).toBe(2310);
    });

    test("numPrimorial(3) should return 30", () => {
        expect(numPrimorial(3)).toBe(30);
    });

    test("numPrimorial(4) should return 210", () => {
        expect(numPrimorial(4)).toBe(210);
    });

    test("numPrimorial(8) should return 9699690", () => {
        expect(numPrimorial(8)).toBe(9699690);
    });

    test("numPrimorial(9) should return 223092870", () => {
        expect(numPrimorial(9)).toBe(223092870);
    });

});
