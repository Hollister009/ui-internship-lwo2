export const pairElement = (str) => {
  const results = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') results.push(['A', 'T']);
    if (str[i] === 'T') results.push(['T', 'A']);
    if (str[i] === 'C') results.push(['C', 'G']);
    if (str[i] === 'G') results.push(['G', 'C']);
  }
  return results;
};
