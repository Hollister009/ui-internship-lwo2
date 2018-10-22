export const runningAverage = () => {
  let state = 0;
  let count = 0;
  return (param) => {
    count++;
    state += param;
    return state / count;
  };
};
