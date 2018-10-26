import { Person } from './make-a-person';

const bob = new Person('Bob Ross');

describe('Make a person', () => {

    test('bob instanceof Person', () => {
        expect(bob instanceof Person).toBe(true);
    });

    test('bob.firstName should return undefined', () => {
        expect(bob.firstName).toBe(undefined);
    });

    test('bob.lastName should return undefined', () => {
        expect(bob.lastName).toBe(undefined);
    });

    test('bob.getFirstName() should return "Bob"', () => {
        expect(bob.getFirstName()).toBe('Bob');
    });

    test('bob.getLastName() should return "Ross"', () => {
        expect(bob.getLastName()).toBe('Ross');
    });

    test('bob.getFullName() should return "Bob Ross"', () => {
        expect(bob.getFullName()).toBe('Bob Ross');
    });

    test('bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell")', () => {
        bob.setFirstName('Haskell');
        expect(bob.getFullName()).toBe('Haskell Ross');
    });

    test('bob.getFullName() should return "Haskell Ross" after bob.setLastName("Curry")', () => {
        bob.setLastName('Curry');
        expect(bob.getFullName()).toBe('Haskell Curry');
    });

    test('bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry")', () => {
        bob.setFullName('Haskell Curry')
        expect(bob.getFullName()).toBe('Haskell Curry');
    });

    test('bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry")', () => {
        bob.setFullName('Haskell Curry')
        expect(bob.getFirstName()).toBe('Haskell');
    });

    test('bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry")', () => {
        bob.setFullName('Haskell Curry')
        expect(bob.getLastName()).toBe('Curry');
    });

});
