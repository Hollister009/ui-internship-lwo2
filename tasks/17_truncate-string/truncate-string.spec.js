import { truncateString } from './truncate-string';

const STRING0 = 'A-tisket a-tasket A green and yellow basket';
const STRING1 = 'Peter Piper picked a peck of pickled peppers';

describe('truncate-string', () => {
    test(`truncateString("${STRING0}", 11) should return "A-tisket..."`, () => {
        expect(truncateString(STRING0, 11)).toBe('A-tisket...');
    });

    test(`truncateString("${STRING1}", 14) should return "Peter Piper..."`, () => {
        expect(truncateString(STRING1, 14)).toBe('Peter Piper...');
    });

    test(`truncateString("${STRING0}", ${STRING0.length}) should return "${STRING0}"`, () => {
        expect(truncateString(STRING0, STRING0.length)).toBe(STRING0);
    });

    test(`truncateString("${STRING0}", ${STRING0.length + 2}) should return "${STRING0}".`, () => {
        expect(truncateString(STRING0, STRING0.length + 2)).toBe(STRING0);
    });

    test('truncateString("A-", 1) should return "A..."', () => {
        expect(truncateString("A-", 1)).toBe('A...');
    });

    test('truncateString("Absolutely Longer", 2) should return "Ab..."', () => {
        expect(truncateString("Absolutely Longer", 2)).toBe('Ab...');
    });
});