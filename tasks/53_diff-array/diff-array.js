export const diffArray = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);
  return newArr.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
};
