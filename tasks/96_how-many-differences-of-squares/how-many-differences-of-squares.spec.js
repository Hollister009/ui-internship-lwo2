import { squares } from './how-many-differences-of-squares';



describe('How Many Differences of Squares?', () => {

    test('squares(4) should return 3;', () => {
        expect(squares(4)).toBe(3);
    });

    test('squares(10) should return 7;', () => {
        expect(squares(10)).toBe(7);
    });

    test('squares(5) should return 4;', () => {
        expect(squares(5)).toBe(4);
    });

    test('squares(20) should return 15;', () => {
        expect(squares(20)).toBe(15);
    });

    test('squares(6427) should return 4820;', () => {
        expect(squares(6427)).toBe(4820);
    });

});
