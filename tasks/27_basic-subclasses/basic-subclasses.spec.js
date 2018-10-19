import { God, Human, Man, Woman } from './basic-subclasses';

describe('basic-subclasses', () => {
    const humans = God.create();

    test(`God should create two humans`, () => {
        expect(humans[0] instanceof Human).toBe(true);
        expect(humans[1] instanceof Human).toBe(true);
    });

    test(`First human should be a Man`, () => {
        expect(humans[0].sex).toBe('male');
        expect(humans[0] instanceof Man).toBe(true);
    });

    test(`Second human should be a Woman`, () => {
        expect(humans[1].sex).toBe('female');
        expect(humans[1] instanceof Woman).toBe(true);
    });

    test(`The name of a man should be Adam`, () => {
        expect(humans[0].name).toBe('Adam');
    });

    test(`The name of a woman should be Eve`, () => {
        expect(humans[1].name).toBe('Eve');
    });
});