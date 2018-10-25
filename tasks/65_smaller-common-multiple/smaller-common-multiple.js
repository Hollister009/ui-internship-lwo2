export const smallestCommons = (arr) => {
  const rangeArr = [Math.min(...arr)];
  const maxNum = Math.max(...arr);
  let num = rangeArr[0] + 1;
  while (num <= maxNum) {
    rangeArr.push(num);
    num++;
  }
  let curN = maxNum * 2;
  let condition = rangeArr.every((el) => el % curN === 0);
  while (!condition) {
    curN += maxNum;
    condition = rangeArr.every((el) => curN % el === 0);
  }
  return curN;
};
