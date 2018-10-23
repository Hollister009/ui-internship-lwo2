export const whatIsInAName = (collection, source) => {
  const arr = [];
  const srcLength = Object.keys(source).length;
  collection.forEach((obj) => {
    const objLength = Object.keys(obj).length;
    if (objLength >= srcLength) {
      let pass = true;
      for (let key in source) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] !== source[key]) {
            pass = false;
            break;
          }
        } else {
          pass = false;
          break;
        }
      }
      if (pass) arr.push(obj);
    }
  });
  return arr;
};
