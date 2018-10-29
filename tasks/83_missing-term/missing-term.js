export const findMissing = (arr) => {
  const newArr = arr.slice().sort((a, b) => a - b);
  const arrLen = newArr.length;
  const progress = (newArr[arrLen-1] - newArr[0]) / arrLen;
  const compArr = [newArr[0]];

  let value = newArr[0];
  for (let i = 0; i < arrLen; i++) {
    value += progress;
    compArr.push(value);
  }

  let missing;
  compArr.forEach((el) => {
    if (!newArr.includes(el)) missing = el;
  });

  return missing;
};
