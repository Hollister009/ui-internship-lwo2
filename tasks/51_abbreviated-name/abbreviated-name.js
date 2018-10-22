export const abbreviated = (fullName) => {
  if (fullName.split('').length === 1) return fullName;
  fullName = fullName.split(' ');
  let nameCount = fullName.length;
  while (nameCount > 1) {
    fullName[nameCount - 1] = fullName[nameCount - 1][0] + '.';
    nameCount--;
  }
  return fullName.join(' ');
};
