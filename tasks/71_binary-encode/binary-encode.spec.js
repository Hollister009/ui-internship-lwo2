import { binaryEncode } from './binary-encode';
import { TEST_BLOCKS } from '../70_binary-decode/binary-decode.spec';

describe('binary-encode', () => {
    test('should return a string', () => {
        expect(typeof binaryEncode()).toBe('string');
    });

    test(`should return correct encoded values`, () => {
        TEST_BLOCKS.forEach(({text, binary}) => expect(binaryEncode(text)).toBe(binary));
    });
});