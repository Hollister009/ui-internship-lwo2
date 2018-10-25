export const pairwise = (...args) => {
  if (args[0].length === 0) return 0;
  const arrLookup = [...args[0]];
  const target = [];
  let curIndex = 0;
  const arrLen = arrLookup.length;

  while (curIndex < arrLen) {
    for (let i = curIndex + 1; i < arrLen; i++) {
      const check = (arrLookup[i] + arrLookup[curIndex] === args[1]);
      if (check) {
        target.push(i);
        target.push(curIndex);
        arrLookup[i] = '';
        arrLookup[curIndex]= '';
        break;
      }
    }
    curIndex++;
  }
  return target.reduce((sum, cur) => sum + cur, 0);
};
