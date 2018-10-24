import { pairElement } from './dna-pairing';

describe('DNA pairing', () => {

    test('pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', () => {
        expect(JSON.stringify(pairElement("ATCGA"))).toBe('[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]');
    });

    test('pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]', () => {
        expect(JSON.stringify(pairElement("TTGAG"))).toBe('[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]');
    });

    test('pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]', () => {
        expect(JSON.stringify(pairElement("CTCTA"))).toBe('[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]');
    });
});
