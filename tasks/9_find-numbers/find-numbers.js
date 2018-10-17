export const getNumbers = (str) => {
  const reg = /\d+/g;
  let strArr = str.match(reg);
  let numArr = strArr.map((el) => {
    return Number(el);
  });
  return numArr;
};
