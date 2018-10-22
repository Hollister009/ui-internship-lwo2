export const stringExpansion = (str) => {
  const strLen = str.length;
  if (strLen === '') return str;
  let repeatCount = 0;
  let repeatedStr = '';
  for (let i = 0; i < strLen; i++) {
    if (/[0-9]/.test(str[i])) {
      repeatCount = +str[i];
      continue;
    }
    if (repeatCount !== 0) {
      repeatedStr += str[i].repeat(repeatCount);
    } else {
      repeatedStr += str[i];
    }
  }
  return repeatedStr;
};
