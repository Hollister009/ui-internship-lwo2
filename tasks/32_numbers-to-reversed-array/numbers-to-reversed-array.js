export const numberToReversedArray = (number) => {
  return number
      .toString()
      .split('')
      .reverse()
      .map((digit) => parseInt(digit, 10));
};
