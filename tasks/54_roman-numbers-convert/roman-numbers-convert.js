export const convertToRoman = (arg) => {
  const romansNum = {
    1000: 'M', 900: 'CM',
    500: 'D', 400: 'CD',
    100: 'C', 90: 'XC',
    50: 'L', 40: 'XL',
    10: 'X', 9: 'IX',
    5: 'V', 4: 'IV', 1: 'I',
  };
  const romaKeys = Object.keys(romansNum).reverse();
  let romanaized = '';
  let numCp = arg;

  for (let value of romaKeys) {
    while (numCp >= +value) {
      romanaized += romansNum[value];
      numCp -= +value;
    }
  }
  return romanaized;
};
