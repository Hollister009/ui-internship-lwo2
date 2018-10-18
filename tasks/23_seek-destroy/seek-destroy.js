export const destroyer = (array, ...args) => {
  return array.filter((el) => !args.includes(el));
};
