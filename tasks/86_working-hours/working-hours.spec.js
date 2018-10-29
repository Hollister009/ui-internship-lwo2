import { formatWorkingHours } from './working-hours';

const INPUT_DATA = [
    {
        'day': 'sat',
        'from': '10:00',
        'to': '23:00'
    },
    {
        'day': 'mon',
        'from': '11:00',
        'to': '23:00'
    },
    {
        'day': 'tue',
        'from': '11:00',
        'to': '23:00'
    },
    {
        'day': 'wed',
        'from': '11:00',
        'to': '23:00'
    },
    {
        'day': 'thu',
        'from': '12:00',
        'to': '23:00'
    },
    {
        'day': 'fri',
        'from': '12:00',
        'to': '23:00'
    },
    {
        'day': 'sun',
        'from': '11:00',
        'to': '23:00'
    }
];

const OUTPUT_DATA = [
    'MON - WED: 11:00 - 23:00',
    'THU - FRI: 12:00 - 23:00',
    'SAT: 10:00 - 23:00',
    'SUN: 11:00 - 23:00'
];

describe('working-hours', () => {
    test(`formatWorkingHours(${INPUT_DATA}) should return an array`, () => {
        expect(Array.isArray(formatWorkingHours(INPUT_DATA))).toBe(true);
    });

    test('formatWorkingHours([]) should return an empty array', () => {
        expect(formatWorkingHours([])).toEqual([]);
    });

    test(`formatWorkingHours(${INPUT_DATA}) should return ${OUTPUT_DATA}`, () => {
        expect(formatWorkingHours(INPUT_DATA)).toEqual(OUTPUT_DATA);
    });
});
