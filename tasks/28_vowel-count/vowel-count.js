export const getVowelCount = (str) => {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  const splitted = str.toLowerCase().split('');
  return splitted.reduce((sum, el) => {
    if (vowel.indexOf(el) !== -1) sum += 1;
    return sum;
  }, 0);
};
