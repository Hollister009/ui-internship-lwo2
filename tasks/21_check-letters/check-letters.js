export const checkLetters = (arr) => {
  const word = arr[0].toLowerCase();
  const letters = arr[1].toLowerCase().split('');
  return letters.every((letter) => {
    return (word.indexOf(letter) !== -1);
  });
};
