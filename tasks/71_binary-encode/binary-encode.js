export const binaryEncode = (sent) => {
  const messageArr = !sent ? [] : sent.split('');

  return messageArr
      .map((el) => {
        el = el.charCodeAt().toString(2);
        while (el.length < 8) {
          el = '0' + el;
        }
        return el;
      }).join(' ');
};
