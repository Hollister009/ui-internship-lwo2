export const findElement = (arr, func) => {
  for (let item of arr) {
    if (func(item)) return item;
  }
  return;
};
