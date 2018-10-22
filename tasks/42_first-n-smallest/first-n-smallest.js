export const firstNSmallest = (lookup, num) => {
  if (num === 0) return [];
  const smallestArr = lookup.slice().sort((a, b) => a - b).slice(0, num);
  for (let key in lookup) {
    if (!smallestArr.includes(lookup[key])) lookup[key] = '';
  }
  return lookup.filter((el) => el !== '').slice(0, num);
};
