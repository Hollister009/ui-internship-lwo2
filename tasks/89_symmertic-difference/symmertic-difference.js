export const sym = (...args) => {
  return args.reduce((arr, cur) => {
    /* eslint-disable-next-line */
    const set = [...new Set(cur)];
    const loopCount = set.length;

    for (let i = 0; i < loopCount; i++) {
      const x = arr.indexOf(set[i]);
      if (x === -1) {
        arr.push(set[i]);
      } else {
        arr.splice(x, 1);
      }
    }

    return arr;
  }, []).sort((a, b) => a - b);
};
