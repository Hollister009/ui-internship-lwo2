export const palindrome = (string) => {
  const copy = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const revCopy = copy
      .split('')
      .reverse()
      .join('');
  return copy === revCopy;
};
