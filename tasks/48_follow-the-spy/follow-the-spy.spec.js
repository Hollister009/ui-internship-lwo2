import { followTheSpy } from './follow-the-spy';

describe('Follow the spy', () => {

    test("followTheSpy([['USA', 'BRA'], ['JPN', 'PHL'], ['UAE', 'JPN'], ['BRA', 'UAE']]) should return string", () => {
        expect(typeof followTheSpy([['USA', 'BRA'], ['JPN', 'PHL'], ['UAE', 'JPN'], ['BRA', 'UAE']])).toBe("string");
    });

    test("followTheSpy([['USA', 'BRA'], ['JPN', 'PHL'], ['UAE', 'JPN'], ['BRA', 'UAE']]) should return 'USA, BRA, UAE, JPN, PHL'", () => {
        expect(followTheSpy([['USA', 'BRA'], ['JPN', 'PHL'], ['UAE', 'JPN'], ['BRA', 'UAE']])).toBe("USA, BRA, UAE, JPN, PHL");
    });

});
