import { unpackArray } from './unpack-elements';

describe('Unpack array', () => {

    test('unpackArray([[["a"]], [["b"]]]) should return ["a", "b"]', () => {
        expect(JSON.stringify(unpackArray([[["a"]], [["b"]]]))).toBe('["a","b"]');
    });

    test('unpackArray([1, [2], [3, [[4]]]])', () => {
        expect(JSON.stringify(unpackArray([1, [2], [3, [[4]]]]))).toBe('[1,2,3,4]');
    });

    test('unpackArray([1, [], [3, [[4]]]])', () => {
        expect(JSON.stringify(unpackArray([1, [], [3, [[4]]]]))).toBe('[1,3,4]');
    });

    test('unpackArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]', () => {
        expect(JSON.stringify(unpackArray([1, {}, [3, [[4]]]]))).toBe('[1,{},3,4]');
    });

});
