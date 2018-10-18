export const titleCase = (string) => {
  const strArray = string.toLowerCase().split(' ');
  let casedWordsArray = strArray.map((word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1, word.length);
    return word;
  });
  return casedWordsArray.join(' ');
};
