export const numPrimorial = (num) => {
  const prePrime = [2, 3, 5, 7, 11, 13, 17, 19, 23];
  let primoral;
  if (num < prePrime.length) {
    primoral = [];
    for (let i = 0; i < num; i++) {
      primoral.push(prePrime[i]);
    }
  } else {
    primoral = [...prePrime];
    while (primoral.length < num) {
      const nextPrime = getPrime(primoral[primoral.length - 1]);
      primoral.push(nextPrime);
    }
  }
  return primoral.reduce((mul, cur) => mul * cur);
};

const getPrime = (num) => {
  let next = num + 2;
  if (next % 2 === 0) {
    next++;
  }
  while (!isPrime(next)) {
    next += 2;
  }
  return next;
};

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
