import { insert } from './insert-string';

describe('Insert string', () => {

    test("insert('We are doing some exercises.') should return ‘We are doing some exercises’", () => {
        expect(insert('We are doing some exercises.')).toBe('We are doing some exercises.');
    });

    test("insert('We are doing some exercises.','JavaScript ') should return ‘JavaScript We are doing some exercises.’", () => {
        expect(insert('We are doing some exercises.','JavaScript ')).toBe('JavaScript We are doing some exercises.');
    });

    test("insert('We are doing some exercises.','JavaScript ',18) should return ‘We are doing some JavaScript exercises.’", () => {
        expect(insert('We are doing some exercises.','JavaScript ',18)).toBe('We are doing some JavaScript exercises.');
    });

});
