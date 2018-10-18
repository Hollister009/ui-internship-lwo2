import { cloneArr } from './clone-arr';

describe('clone-arr', () => {
    test(`cloneArr([]) should return an array`, () => {
        expect(Array.isArray(cloneArr([]))).toBe(true);
    });

    test('mutation should not be happened', () => {
        const original = [1, 2, 3, 4, 5];
        const copy = cloneArr(original);
        
        copy.splice(0, 3);
        
        expect(original.length).toBe(5);
    });
});