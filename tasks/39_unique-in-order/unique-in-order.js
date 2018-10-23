export const uniqueInOrder = (arg) => {
  const res = [];
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] !== arg[i-1]) res.push(arg[i]);
  }
  return res;
};
