export const dropElements = (arr, func) => {
  const filteredArr = [...arr];
  for (let item of arr) {
    if (func(item)) return filteredArr;
    filteredArr.shift();
  }
  return [];
};
