import { orbitalPeriod } from './calculate-orbital-period';

describe('Calculate orbital period', () => {

    test('orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}]', () => {
        expect(JSON.stringify(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))).toBe(JSON.stringify([{name: "sputnik", orbitalPeriod: 86400}]));
    });

    test('orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]', () => {
        expect(JSON.stringify(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])))
            .toBe(JSON.stringify([{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]));
    });
});
