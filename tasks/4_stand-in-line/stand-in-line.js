export const nextInLine = (arr, item) => {
  arr.push(item);
  return arr.shift();
};
