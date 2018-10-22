export const uniteUnique = (mainArr, ...restA) => {
  restA.forEach((arr) => {
    arr.forEach((item) => {
      if (!mainArr.includes(item)) mainArr.push(item);
    });
  });
  return mainArr;
};
