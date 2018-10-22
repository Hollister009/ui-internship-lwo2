
/* eslint-disable */
String.prototype.camelCase = function () {
  return this
    .split(' ')
    .map((el) => el[0].toUpperCase() + el.substr(1))
    .join('');
}