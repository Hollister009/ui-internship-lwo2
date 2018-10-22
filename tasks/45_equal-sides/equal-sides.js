export const findEqualIndex = (array) => {
  for (let i in array) {
    if (array.hasOwnProperty(i)) {
      const leftSide = array
          .slice(0, +i)
          .reduce((sum, cur) => sum + cur, 0);
      const rightSide = array
          .slice(+i + 1)
          .reduce((sum, cur) => sum + cur, 0);
      if (leftSide === rightSide) return +i;
    }
  }
  return -1;
};
