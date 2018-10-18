import { humanizeFormat} from './humanize-format';

describe('humanize-format', () => {
    test('humanizeFormat() should return an empty string', () => {
        expect(humanizeFormat()).toBe('');
    });

    test('humanizeFormat(1) should return 1st', () => {
        expect(humanizeFormat(1)).toBe('1st');
    });

    test('humanizeFormat(8) should return 8th', () => {
        expect(humanizeFormat(8)).toBe('8th');
    });

    test('humanizeFormat(301) should return 301st', () => {
        expect(humanizeFormat(301)).toBe('301st');
    });

    test('humanizeFormat(402) should return 402nd', () => {
        expect(humanizeFormat(402)).toBe('402nd');
    });

    test('humanizeFormat(503) should return 503rd', () => {
        expect(humanizeFormat(503)).toBe('503rd');
    });
});