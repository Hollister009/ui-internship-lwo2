export const arrayPlusArray = (arr1, arr2) => {
  const sumArr = arr1.length > arr2.length ? [...arr1] : [...arr2];
  return sumArr.map((item, i) => {
    return arr1[i] + arr2[i] || item;
  });
};
