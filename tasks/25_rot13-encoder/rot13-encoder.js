export const rot13Encoder = (string) => {
  string = string.toUpperCase();
  let codeStr = [];
  const re = /[A-Z]/;
  const strLen = string.length;
  for (let i = 0; i < strLen; i++) {
    string[i].match(re) ?
      codeStr.push(string.charCodeAt(i) % 26 + 65) :
      codeStr.push(string.charCodeAt(i));
  }
  return String.fromCharCode.apply(null, codeStr);
};

