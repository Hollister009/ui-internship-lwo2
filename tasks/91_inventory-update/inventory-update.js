export const updateInventory = (arr1, arr2) => {
  const newInv = [];
  let curPos = 0;
  const arrLen = arr1.length;
  let arr2Copy = [...arr2];

  while (curPos < arrLen) {
    const curNode = arr1[curPos];
    arr2Copy.forEach((node, i, arr) => {
      if (node[1] === curNode[1]) {
        curNode[0] = curNode[0] + node[0];
        arr[i] = '';
      }
    });

    arr2Copy = arr2Copy.filter((el) => el !== '');
    newInv.push(curNode);
    curPos++;
  }

  arr2Copy.forEach((el) => newInv.push(el));
  newInv.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    else if (a[1] > b[1]) return 1;
    return 0;
  });
  return newInv;
};

