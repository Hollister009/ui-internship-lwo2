export const getVowelCount = (str) => {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  const splitted = str.toLowerCase().split('');
  let count = 0;
  splitted.forEach((el) => {
    if (vowel.indexOf(el) !== -1) count++;
  });
  return count;
};
