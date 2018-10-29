import { updateRecords } from './record-collection';

describe('Record collection', () => {

    test('After updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"', () => {
        const collection = updateRecords(5439, "artist", "ABBA");
        expect(collection['5439']['artist']).toBe('ABBA');
    });

    test('After updateRecords(5439, "tracks", "Take a Chance on Me"), tracks should have "Take a Chance on Me" as the last element', () => {
        const collection = updateRecords(5439, "tracks", "Take a Chance on Me");
        const tracks = collection['5439']['tracks'];
        expect(tracks[tracks.length - 1]).toBe('Take a Chance on Me');
    });

    test('After updateRecords(2548, "artist", ""), artist should not be set', () => {
        const collection = updateRecords(2548, "artist", "");
        expect(collection['2548']['artist']).toBe(undefined);
    });

    test('After updateRecords(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love" as the last element.', () => {
        const collection = updateRecords(1245, "tracks", "Addicted to Love");
        const tracks = collection['1245']['tracks'];
        expect(tracks[tracks.length - 1]).toBe('Addicted to Love');
    });

    test('After updateRecords(2468, "tracks", "Free"), tracks should have "1999" as the first element', () => {
        const collection = updateRecords(2468, "tracks", "Free");
        const tracks = collection['2468']['tracks'];
        expect(tracks[0]).toBe('1999');
    });

    test('After updateRecords(2548, "tracks", ""), tracks should not be set', () => {
        const collection = updateRecords(2548, "tracks", "");
        expect(collection['2548']['tracks']).toBe(undefined);
    });
});
