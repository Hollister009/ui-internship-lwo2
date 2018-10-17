import {trimWhiteSpaces} from './remove-whitespaces';

describe('remove-whitespaces', () => {
  test('trimWhiteSpaces(‘I am travelling down the river’) should be equal to “Iamtravellingdowntheriver”', () => {
    expect(trimWhiteSpaces('I am travelling down the river')).toBe(
        'Iamtravellingdowntheriver'
    );
  });

  test('trimWhiteSpaces(‘  I  am  travelling  down  the  river  ’) should be equal to "Iamtravellingdowntheriver"', () => {
    expect(trimWhiteSpaces('  I  am  travelling  down  the  river  ')).toBe(
        'Iamtravellingdowntheriver'
    );
  });
});
