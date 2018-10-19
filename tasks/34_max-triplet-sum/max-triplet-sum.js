export const maxTripletSum = (arr) => {
  arr = arr.filter((el) => el > 0).sort((a, b) => a > b);
  /* eslint-disable-next-line */
  let uniqueVal = [...new Set(arr)];
  if (uniqueVal.length < 3) uniqueVal.push(0);
  return uniqueVal.slice(-3).reduce((sum, cur) => (sum += cur));
};
