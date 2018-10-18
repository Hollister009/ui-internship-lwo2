export const getNumbers = (str) => {
  const reg = /\d+/g;
  const strArr = str.match(reg);
  const numArr = strArr.map((el) => {
    return Number(el);
  });
  return numArr;
};
