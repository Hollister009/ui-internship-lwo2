export const squares = (num) => {
  if (num <= 0) return 0;
  const range = [1];
  const squares = [];

  for (let i = 2; i <= num; i++) {
    range.push(i);
  }

  for (let f = 1; f <= num; f++) {
    if (f % 4 === 0) {
      squares.push(f);
    }

    const N = Math.pow(f, 2) - Math.pow(f-1, 2);
    if (N <= num) {
      squares.push(N);
    }
  }

  return squares.length;
};
