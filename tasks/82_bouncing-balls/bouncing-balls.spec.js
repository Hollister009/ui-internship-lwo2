import { bouncingBall } from './bouncing-balls';

describe('Bouncing ball', () => {
    test("bouncingBall(3.0, 0.66, 1.5) should return 3", () => {
        expect(bouncingBall(3.0, 0.66, 1.5)).toBe(3);
    });

    test("bouncingBall(30.0, 0.66, 1.5) should return 15", () => {
        expect(bouncingBall(30.0, 0.66, 1.5)).toBe(15);
    });

    test("bouncingBall(30, 0.9999999999, 1) should return 68023942001", () => {
        expect(bouncingBall(30, 0.9999999999, 1)).toBe(68023942001);
    });
});
