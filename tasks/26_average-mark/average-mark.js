export const getAverage = (arr) => {
  const arrLen = arr.length;
  const sumAll = arr.reduce((sum, cur) => sum + cur);
  return Math.round(sumAll / arrLen);
};
