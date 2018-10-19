export const titleCase = (string) => {
  const strArray = string.toLowerCase().split(' ');
  const casedWordsArray = strArray.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length);
  });
  return casedWordsArray.join(' ');
};
