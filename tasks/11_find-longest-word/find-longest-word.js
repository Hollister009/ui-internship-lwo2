export const findLongestWord = (string) => {
  const strArr = string.split(' ');
  let longest = strArr[0].length;
  strArr.forEach((el) => {
    if (el.length >= longest) return (longest = el.length);
  });
  return longest;
};
