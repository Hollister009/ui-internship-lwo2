import { maxTripletSum } from './max-triplet-sum';

describe('max-triplet-sum', () => {
    test(`maxTripletSum([-7,12,-7,29,-5,0,-7,0,0,29]) should return 41`, () => {
        expect(maxTripletSum([-7,12,-7,29,-5,0,-7,0,0,29])).toBe(41);
    });

    test(`maxTripletSum([2,1,8,0,6,4,8,6,2,4]) should return 18`, () => {
        expect(maxTripletSum([2,1,8,0,6,4,8,6,2,4])).toBe(18);
    });

    test(`maxTripletSum([3,2,6,8,2,3]) should return 17`, () => {
        expect(maxTripletSum([3,2,6,8,2,3])).toBe(17);
    });
});