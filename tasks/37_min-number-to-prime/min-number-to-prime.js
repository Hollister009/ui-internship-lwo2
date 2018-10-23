export const minNumberToPrime = (arr) => {
  let sumOfNum = arr.reduce((sum, cur) => sum + cur);
  let count = 0;
  while (!isPrime(sumOfNum)) {
    count++;
    sumOfNum++;
  }
  return count;
};

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
