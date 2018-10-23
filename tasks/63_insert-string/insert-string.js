export const insert = (str, insertable, position = 0) => {
  if (!insertable) return str;
  if (position !== 0) {
    return `${str.substr(0, position)}${insertable}${str.substr(
        position, str.length)}`;
  }
  return `${insertable}${str}`;
};
