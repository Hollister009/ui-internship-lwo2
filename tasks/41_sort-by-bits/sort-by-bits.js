export const sortByBits = (array) => {
  return array.sort((a, b) => {
    const order = (a.toString(2).match(/1/g) || '').length -
                  (b.toString(2).match(/1/g) || '').length;
    return order !== 0 ? order : a - b;
  });
};
