import { DNAStrand } from './complementary-dna';

describe('Complementary DNA ', () => {

    test('DNAStrand("ATTGC") should return TAACG', () => {
        expect(DNAStrand("ATTGC")).toBe('TAACG');
    });

    test('DNAStrand("GTAT") should return CATA', () => {
        expect(DNAStrand("GTAT")).toBe('CATA');
    });

    test('DNAStrand("AAAA") should return TTTT', () => {
        expect(DNAStrand("AAAA")).toBe('TTTT');
    });
});
