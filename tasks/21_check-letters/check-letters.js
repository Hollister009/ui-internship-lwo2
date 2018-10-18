export const checkLetters = (arr) => {
  let flag = true;
  const word = arr[0].toLowerCase();
  const letters = arr[1].toLowerCase().split('');
  letters.every((letter) => {
    if (word.indexOf(letter) === -1) flag = false;
    return flag;
  });
  return flag;
};
