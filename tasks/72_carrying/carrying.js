export const addTogether = (...args) => {
  if (typeof args[0] !== 'number') {
    return;
  }

  if (!args[1]) {
    return function(x) {
      if (typeof x !== 'number') {
        return;
      }
      return args[0] + x;
    };
  }

  if (typeof args[1] !== 'number') {
    return;
  }
  return args[0] + args[1];
};
