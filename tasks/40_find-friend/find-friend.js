export const findFriend = (line) => {
  const copyLine = line.slice();
  const lineLength = copyLine.length;
  let count = 0;
  for (let i = 0; i < lineLength; i++) {
    const condition = copyLine[i] === 'red';
    if (condition && copyLine[i - 1] === 'blue' && copyLine[i + 1] === 'blue') {
      count++;
    } else if (
      condition &&
      copyLine[i - 1] === 'blue' &&
      copyLine[i - 2] === 'blue'
    ) {
      count++;
    } else if (
      condition &&
      copyLine[i + 1] === 'blue' &&
      copyLine[i + 2] === 'blue'
    ) {
      count++;
    }
  }
  return count;
};
