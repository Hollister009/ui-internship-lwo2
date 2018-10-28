export const nbMonths = (...args) => {
  let [
    priceOld, priceNew,
    moneyPerMonth, percentLoss,
  ] = args;
  let currentM = 0;

  if (priceOld >= priceNew) {
    const savings = priceOld - priceNew;
    return [currentM, savings];
  }

  let savingsAmount = 0;
  let totalCash = priceOld + savingsAmount;

  while (totalCash < priceNew) {
    currentM++;
    savingsAmount += moneyPerMonth;

    if (currentM % 2 === 0) percentLoss += 0.5;
    priceOld -= Math.round((priceOld / 100) * percentLoss);
    priceNew -= Math.round((priceNew / 100) * percentLoss);
    totalCash = priceOld + savingsAmount;
  }

  const savings = totalCash - priceNew;
  return [currentM, savings];
};
