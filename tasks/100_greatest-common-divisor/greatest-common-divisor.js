export const greatestCommonDivisor = (num1, num2) => {
  const maxNum = Math.max(num1, num2);
  const minNum = Math.min(num1, num2);
  let GCD = minNum;
  if (maxNum % GCD === 0) return GCD;
  while (maxNum % GCD !== 0 || minNum % GCD !== 0) {
    GCD--;
  }
  return GCD;
};
