import { titleCase } from './title-case';

describe('title-case', () => {
    test(`titleCase("I'm a little tea pot") should return a string`, () => {
        expect(typeof titleCase("I'm a little tea pot")).toBe('string');
    });

    test(`titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot"`, () => {
        expect(titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
    });

    test(`titleCase("sHoRt AnD sToUt") should return "Short And Stout"`, () => {
        expect(titleCase("sHoRt AnD sToUt")).toBe('Short And Stout');
    });

    test(`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout"`, () => {
        expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe('Here Is My Handle Here Is My Spout');
    });
});