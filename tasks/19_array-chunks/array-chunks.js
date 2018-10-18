export const arrayChunks = (array, size) => {
  let twoDimensional = [];
  let n = 0;
  let i = array.length;
  while (i - size > 0) {
    i -= size;
    twoDimensional.push(
        array
            .slice(n, n + size)
            .reduce((sum, cur) => sum.concat(cur), [])
    );
    n += size;
  }
  twoDimensional.push(array.slice(n));
  return twoDimensional;
};
