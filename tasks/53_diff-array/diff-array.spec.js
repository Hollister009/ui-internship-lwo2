import { diffArray } from './diff-array';

describe('Diff 2 arrays', () => {

    test('diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])should return an array', () => {
        expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) instanceof Array).toBe(true);
    });

    test('diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["pink wool"]', () => {
        expect(JSON.stringify(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))).toBe('["pink wool"]');
    });

    test('diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["pink wool","diorite"]', () => {
        expect(JSON.stringify(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))).toBe('["pink wool","diorite"]');
    });

    test('diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) should return []', () => {
        expect(JSON.stringify(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]))).toBe('[]');
    });

    test('diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4]', () => {
        expect(JSON.stringify(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toBe('[4]');
    });

    test('diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) should return ["piglet", 4]', () => {
        expect(JSON.stringify(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))).toBe('["piglet",4]');
    });

    test('diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) should return ["snuffleupagus", "cookie monster", "elmo"]', () => {
        expect(JSON.stringify(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]))).toBe('["snuffleupagus","cookie monster","elmo"]');
    });

    test('diffArray([1, "calf", 3, "piglet"], [7, "filly"]) should return [1, "calf", 3, "piglet", 7, "filly"].', () => {
        expect(JSON.stringify(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))).toBe('[1,"calf",3,"piglet",7,"filly"]');
    });

});
