export const findCloseIndex = (string, index) => {
  if (!string[index].match(/[(]/)) return -1;
  const strLen = string.length;
  let closed = 1;
  let searchedIndex = index;
  for (let i = index + 1; i < strLen; i++) {
    if (closed === 0) break;
    if (string[i] === '(') closed++;
    if (string[i] === ')') closed--;
    searchedIndex++;
  }
  return searchedIndex;
};
