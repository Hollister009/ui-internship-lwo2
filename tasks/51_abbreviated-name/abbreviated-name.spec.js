import { abbreviated } from './abbreviated-name';

describe('Abbreviated name', () => {

    test("abbreviated('Verbovyi') should be a string", () => {
        expect(typeof abbreviated('Verbovyi')).toBe('string');
    });

    test("abbreviated('Verbovyi') should be 'Verbovyi'", () => {
        expect(abbreviated('Verbovyi')).toBe('Verbovyi');
    });

    test("abbreviated('Verbovyi Dmytro') should be 'Verbovyi D.'", () => {
        expect(abbreviated('Verbovyi Dmytro')).toBe('Verbovyi D.');
    });

    test("abbreviated('Verbovyi Dmytro Oleksandrovych') should be 'Verbovyi D. O.'", () => {
        expect(abbreviated('Verbovyi Dmytro Oleksandrovych')).toBe('Verbovyi D. O.');
    });

});
