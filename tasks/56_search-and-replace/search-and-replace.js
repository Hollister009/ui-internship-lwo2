export const myReplace = (str, before, after) => {
  // str.indexOf(before);
  if (/[A-Z]/.test(before[0])) {
    after = after[0].toUpperCase() + after.substr(1, after.length);
  }
  return str.replace(before, after);
};
