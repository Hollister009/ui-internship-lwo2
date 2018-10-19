export const humanizeFormat = (num) => {
  if (!num) return '';
  const endings = ['st', 'nd', 'rd', 'th'];
  let humanNum = num.toString();
  const lastDigit = humanNum.charAt(humanNum.length - 1);
  switch (true) {
    case lastDigit === '1':
      humanNum += endings[0];
      break;
    case lastDigit === '2':
      humanNum += endings[1];
      break;
    case lastDigit === '3':
      humanNum += endings[2];
      break;
    default:
      humanNum += endings[3];
      break;
  }
  return humanNum;
};
