export const reverseStringInRange = (string, params) => {
  const strArr = string.split('');
  const chunk = strArr.slice(params[0], params[1] + 1);
  return (
    string.substr(0, params[0]) +
    strArr
        .splice(params[0], chunk.length, chunk)
        .reverse()
        .join('') +
    string.substr(params[1] + 1, string.length)
  );
};
