export const validateBet = (type, message) => {
  let checkStr = message;
  const re = /([\s,])+/g;
  checkStr = checkStr.replace(re, ',');

  const splittedNums = checkStr.split(',').map((n) => Number(n));
  /* eslint-disable-next-line */
  const result = [...new Set(splittedNums)];

  if (result.length !== type[0]) return 'None';
  const validBet = result.every((x) => x <= type[1]);
  if (validBet) return result.sort((a, b) => a - b);
  return 'None';
};
