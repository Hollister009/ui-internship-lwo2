export const maxTripletSum = (arr) => {
  const modArr = arr.slice().filter((el) => el > 0).sort((a, b) => a > b);
  /* eslint-disable-next-line */
  const uniqueVal = [...new Set(modArr)];
  if (uniqueVal.length < 3) uniqueVal.push(0);
  return uniqueVal.slice(-3).reduce((sum, cur) => (sum += cur));
};
