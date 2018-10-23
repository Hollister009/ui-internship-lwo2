export const maxProduct = (values) => {
  let maxValue = values[0] * values[1];
  for (let i = 1; i < values.length; i++) {
    if (maxValue < values[i] * values[i + 1]) {
      maxValue = values[i] * values[i + 1];
    }
  }
  return maxValue;
};
