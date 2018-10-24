export const validBraces = (braces) => {
  const brObj = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack = [];
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === '(' || braces[i] === '{' || braces[i] === '[') {
      stack.push(braces[i]);
    } else if (brObj[braces[i]] !== stack[stack.length - 1]) {
      return false;
    } else {
      stack.pop();
    }
  }
  return true;
};
