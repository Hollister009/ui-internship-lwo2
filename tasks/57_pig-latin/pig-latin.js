export const translatePigLatin = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(string[0])) return string + 'way';
  const newStr = string.split('');
  for (let i = 0; i < newStr.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      break;
    }
    newStr.push(string[i]);
    newStr.shift();
  }
  return newStr.join('') + 'ay';
};
