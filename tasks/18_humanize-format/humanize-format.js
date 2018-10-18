export const humanizeFormat = (num) => {
  if (!num) return '';
  const endings = ['st', 'nd', 'rd', 'th'];
  let humanNum = num.toString();
  switch (true) {
    case humanNum.charAt(humanNum.length-1) === '1':
      humanNum += endings[0];
      break;
    case humanNum.charAt(humanNum.length-1) === '2':
      humanNum += endings[1];
      break;
    case humanNum.charAt(humanNum.length-1) === '3':
      humanNum += endings[2];
      break;
    default:
      humanNum += endings[3];
      break;
  }
  return humanNum;
};
