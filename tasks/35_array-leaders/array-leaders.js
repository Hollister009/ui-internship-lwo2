export const arrayLeaders = (arr) => {
  let leaders = [];
  arr.forEach((el, i, arr) => {
    let value = arr.slice(i + 1).reduce((sum, cur) => sum + cur, 0);
    if (el > value) leaders.push(el);
  });
  return leaders;
};
