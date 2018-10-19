export const largestOfFour = (array) => {
  let maxNumArr = [];
  let arrIndex = array.length - 1;
  for (; arrIndex >= 0; arrIndex--) {
    maxNumArr.unshift(Math.max(...array[arrIndex]));
  }
  return maxNumArr;
};
