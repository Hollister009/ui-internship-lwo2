import { swapCases } from './swap-cases';

describe('Swap cases', () => {

    test("swapCases('Hello World') should return a value type a string", () => {
        expect(typeof swapCases('Hello World')).toBe('string');
    });

    test("swapCases('Hello World') should return hELLO wORLD", () => {
        expect(swapCases('Hello World')).toBe('hELLO wORLD');
    });

    test("swapCases('aBcDeF') should return AbCdEf", () => {
        expect(swapCases('aBcDeF')).toBe('AbCdEf');
    });

});
