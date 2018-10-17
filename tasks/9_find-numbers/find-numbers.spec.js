import {getNumbers} from './find-numbers';

describe('find-numbers', () => {
  test('getNumbers(‘There are 3 cats but 4 dogs.’) should return [3, 4]', () => {
    expect(getNumbers('There are 3 cats but 4 dogs.')).toEqual([3, 4]);
  });

  test('getNumbers(‘Hell0, fuck1ng, w0rld’) should return [0, 1, 0]', () => {
    expect(getNumbers('Hell0, fuck1ng, w0rld')).toEqual([0, 1, 0]);
  });
});
