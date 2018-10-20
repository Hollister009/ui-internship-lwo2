export const minNumberToPrime = (arr) => {
  let sumOfNum = arr.reduce((sum, cur) => sum + cur);
  let count = 0;
  let flag = true;
  while (flag) {
    for (let i = sumOfNum - 1; i > 2; i--) {
      if (sumOfNum % i === 0) flag = false;
    }
    if (!flag) {
      sumOfNum++;
      count++;
      flag = true;
    } else {
      break;
    }
  }
  return count;
};
