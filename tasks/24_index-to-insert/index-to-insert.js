export const getIndexToInsert = (array, element) => {
  array = array.sort((a, b) => a > b);
  for (let key in array) {
    if (array[key] >= element) return parseInt(key, 10);
  }
  return array.length;
};
