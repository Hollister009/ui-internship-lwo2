export const unpackArray = (multiArray) => {
  const resArr = [...multiArray];
  return resArr.reduce((sum, cur) => {
    if (!Array.isArray(cur)) {
      return sum.concat(cur);
    } else {
      return sum.concat(unpackArray(cur));
    }
  }, []);
};

