export const sumFibs = (num) => {
  const fiboArr = fibonacci(num);
  return fiboArr
      .filter((el) => el % 2 !== 0 && el <= num)
      .reduce((sum, cur) => sum + cur, 0);
};

const fibonacci = (num) => {
  const sequence = [1, 1];
  let fibo = num;
  let n = 1;
  while (fibo > 2) {
    sequence.push(sequence[n] + sequence[n - 1]);
    fibo--;
    n++;
  }
  return sequence;
};

