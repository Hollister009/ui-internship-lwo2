export const confirmEnding = (word, end) => {
  return word.slice(-end.length) === end ? true : false;
};
