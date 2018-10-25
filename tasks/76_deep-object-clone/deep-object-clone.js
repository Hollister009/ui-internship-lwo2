export const deepClone = (obj) => {
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === Object(obj[key])) {
        clone[key] = deepClone(obj[key]);
      } else {
        clone[key] = obj[key];
      }
    }
  }
  return clone;
};
