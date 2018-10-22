import { humanYearsCatYearsDogYears } from './cat-and-dog-years';

describe('Cats and Dogs years', () => {

    test("humanYearsCatYearsDogYears(1) shoud return [1, 15, 15]", () => {
        expect(JSON.stringify(humanYearsCatYearsDogYears(1))).toBe('[1,15,15]');
    });

    test("humanYearsCatYearsDogYears(2) should return [2, 24, 24]", () => {
        expect(JSON.stringify(humanYearsCatYearsDogYears(2))).toBe('[2,24,24]');
    });

    test("humanYearsCatYearsDogYears(10) should return [10, 56, 64]", () => {
        expect(JSON.stringify(humanYearsCatYearsDogYears(10))).toBe('[10,56,64]');
    });

});
