export const sumAll = (arg) => {
  const firstNum = Math.min(...arg);
  const lastNum = Math.max(...arg);
  const newArr = [firstNum];
  let numI = firstNum + 1;
  while (numI <= lastNum) {
    newArr.push(numI);
    numI++;
  }
  return newArr.reduce((sum, cur) => sum + cur);
};
