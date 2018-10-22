export const convertHTML = (string) => {
  const symbols = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
  };
  const symKeys = Object.keys(symbols);
  for (let i = 0; i < string.length; i++) {
    if (symKeys.includes(string[i])) {
      string = string.replace(string[i], symbols[string[i]]);
    }
  }
  return string;
};
