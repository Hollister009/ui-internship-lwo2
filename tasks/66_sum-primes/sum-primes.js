export const sumPrimes = (num) => {
  let sum = 0;
  let i = num;
  while (i > 1) {
    if (isPrime(i)) sum += i;
    i--;
  }
  return sum;
};

const isPrime = (num) => {
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

