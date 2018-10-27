export const orbitalPeriod = (arr) => {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;

  return arr.map((obj) => {
    const params = Object.keys(obj);
    const period = calculatePeriod(obj[params[1]]);
    return obj = {name: obj[params[0]], orbitalPeriod: period};
  });

  function calculatePeriod(avgAlt) {
    const a = 2 * Math.PI;
    const c = Math.pow(EARTH_RADIUS + avgAlt, 3);
    return Math.round(a * Math.sqrt(c / GM));
  }
};
