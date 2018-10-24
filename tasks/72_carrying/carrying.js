export const addTogether = (a, b) => {
  /* eslint-disable-next-line */
  const args = [].slice.call(arguments);
  for (let v in args) {
    if (typeof args[v] !== 'number') {
      return;
    }
  }
  if (args.length < 2) {
    return function(b) {
      if (typeof b !== 'number') {
        return;
      }
      return a + b;
    };
  }
  return a + b;
};
