export const truncateString = (string, len) => {
  if (string.length <= len) return string;
  if (len > 3) return string.slice(0, len-3) + '...';
  return string.slice(0, len) + '...';
};
