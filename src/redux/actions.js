const INCREASE_NUM = 'INCREASE_NUM';

const increaseNum = (num) => ({
  type: INCREASE_NUM,
  payload: num
})

export { increaseNum, INCREASE_NUM }