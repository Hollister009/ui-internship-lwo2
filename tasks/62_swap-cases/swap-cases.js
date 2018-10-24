export const swapCases = (swap) => {
  const lettersArr = swap.split('');
  return lettersArr.map((el) => {
    if (/[A-Z]/.test(el)) {
      return el.toLowerCase();
    }
    return el.toUpperCase();
  }).join('');
};
