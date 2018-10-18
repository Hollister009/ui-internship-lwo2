export const getIndexToInsert = (array, element) => {
  let modifiedArr = array.slice();
  modifiedArr.push(element);
  modifiedArr.sort((a, b) => a > b);
  return modifiedArr.indexOf(element);
};
