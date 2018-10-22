export const findLetter = (sequence) => {
  let firstchar = sequence[0].charCodeAt();
  for (let i = 0; i < sequence.length; i++) {
    let letter = String.fromCharCode(firstchar + i);
    if (sequence[i] !== letter) return letter;
  }
  return;
};
