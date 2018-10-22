import { whatIsInAName } from './find-object-analogy';

describe('Find object analogy', () => {

    test('whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]', () => {
        expect(JSON.stringify(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))).toBe(JSON.stringify([{ first: "Tybalt", last: "Capulet" }]));
    });

    test('whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]', () => {
        expect(JSON.stringify(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }))).toBe(JSON.stringify([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]));
    });

    test('whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]', () => {
        expect(JSON.stringify(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }))).toBe(JSON.stringify([{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]));
    });

    test('whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }]', () => {
        expect(JSON.stringify(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }))).toBe(JSON.stringify([{ "a": 1, "b": 2, "c": 2 }]));
    });

});
