export const bouncingBall = (height, bounce, windowH) => {
  // your code here
  const cond1 = height > 0;
  const cond2 = bounce > 0 && bounce < 1;
  const cond3 = windowH < height;

  let heightB = height;
  let bounces = 0;
  if (cond1 && cond2 && cond3) {
    while (heightB > windowH) {
      heightB *= bounce;
      bounces++;
    }
  }
  return (bounces * 2) - 1;
};
