export const findLongestWord = (string) => {
  const strArr = string.split(' ');
  let longest = 0;
  strArr.forEach((el) => {
    if (el.length >= longest) longest = el.length;
  });
  return longest;
};
