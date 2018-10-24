export const expressionMatter = (...nums) => {
  const variant1 = (nums[1] + nums[2]) * nums[0];
  const variant2 = nums[0] * nums[1] * nums[2];
  const variant3 = nums[0] + nums[1] * nums[2];
  const variant4 = (nums[0] + nums[1]) * nums[2];
  const variant5 = (nums[0] + nums[2]) * nums[1];
  const variant6 = nums[0] + nums[1] + nums[2];
  return Math.max(variant1, variant2, variant3, variant4, variant5, variant6);
};
