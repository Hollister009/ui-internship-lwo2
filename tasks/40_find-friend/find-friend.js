export const findFriend = (line) => {
  const redMask = 'red';
  const blueMask = 'blue';
  let masked = [0, 0];
  for (let mask of line) {
    if (mask === redMask) masked[0] += 1;
    if (mask === blueMask) masked[1] += 1;
  }
  if (Math.floor(masked[1] / 2) >= masked[0]) return masked[0];
  if (line[0] === line[line.length-1]) return masked[0];
  return masked[0] - 1;
};
