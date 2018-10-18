export const largestOfFour = (array) => {
  let maxNumArr = [];
  for (let i = 3; i >= 0; i--) {
    maxNumArr.unshift(Math.max(...array[i]));
  }
  return maxNumArr;
};
