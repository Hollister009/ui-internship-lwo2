export const leastCommonMultiple = (num1, num2) => {
  const maxVal = Math.max(num1, num2);
  const minVal = Math.min(num1, num2);
  let LCM = maxVal * 2;
  while (LCM % maxVal !== 0 || LCM % minVal !== 0) {
    LCM += maxVal;
  }
  return LCM;
};
