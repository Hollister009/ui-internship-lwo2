export const sumPrimeIndexedElements = (array) => {
  if (array.length === 0) return 0;
  let sum = 0;
  array.forEach((num, i) => {
    if (isPrime(i)) sum += num;
  });
  return sum;
};

const isPrime = (num) => {
  const prePrime = [2, 3, 5, 7, 11, 13, 17, 19, 23];
  if (num < 2) return false;
  if (prePrime.indexOf(num) !== -1) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
