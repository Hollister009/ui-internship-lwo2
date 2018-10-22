export const humanYearsCatYearsDogYears = (years) => {
  let catYears = 0;
  let dogYears = 0;
  const humanYears = years;
  while (years > 0) {
    if (years > 2) {
      catYears += 4;
      dogYears += 5;
    } else if (years === 2) {
      catYears += 9;
      dogYears += 9;
    } else if (years === 1) {
      catYears += 15;
      dogYears += 15;
    }
    years--;
  }
  return [humanYears, catYears, dogYears];
};
