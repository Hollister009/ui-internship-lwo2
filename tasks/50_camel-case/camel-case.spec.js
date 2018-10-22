import './camel-case';

describe('Camel case', () => {

    test("'hello case'.camelCase() should return 'HelloCase'", () => {
        expect('hello case'.camelCase()).toBe("HelloCase");
    });

    test("'camel case word'.camelCase() should return 'CamelCaseWord'", () => {
        expect('camel case word'.camelCase()).toBe("CamelCaseWord");
    });

});
