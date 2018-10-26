export const smallestCommons = (arr) => {
  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);
  const rangeArr = [minNum];
  let num = minNum + 1;
  let curCheckNum = maxNum * 2;

  while (num <= maxNum) {
    rangeArr.push(num);
    num++;
  }

  while (!isCommonNumberMult(rangeArr, curCheckNum)) {
    curCheckNum += maxNum;
  }

  function isCommonNumberMult(array, checkNum) {
    return array.every((el) => checkNum % el === 0);
  }

  return curCheckNum;
};
