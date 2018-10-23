export const myReplace = (str, before, after) => {
  let wordChange = after;
  if (/[A-Z]/.test(before[0])) {
    wordChange = after[0].toUpperCase() + after.substr(1, after.length);
  }
  return str.replace(before, wordChange);
};
