export const addedChar = (str1, str2) => {
  let result = str2;
  for (let i = 0; i < str1.length; i++) {
    result = result.replace(str1[1], '');
  }
  return result[0];
};
