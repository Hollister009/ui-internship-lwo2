export const binaryDecode = (text) => {
  const message = !text ? [] : text.split(' ');
  return message.map((el) => String.fromCharCode(parseInt(el, 2))).join('');
};
