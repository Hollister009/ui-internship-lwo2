export const smallestCommons = (arr) => {
  const rangeArr = [Math.min(...arr)];
  let num = rangeArr[0] + 1;
  while (num <= Math.max(...arr)) {
    rangeArr.push(num);
    num++;
  }
  let curN = Math.max(...rangeArr) * 2;
  let condition = rangeArr.every((el) => el % curN === 0);
  while (!condition) {
    curN += rangeArr[rangeArr.length - 1];
    condition = rangeArr.every((el) => curN % el === 0);
  }
  return curN;
};
