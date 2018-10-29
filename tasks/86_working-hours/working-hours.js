export const formatWorkingHours = (data) => {
  if (data.length === 0) return [];

  const WEEK = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const schedule = {};
  data.forEach((obj) => {
    const day = WEEK.indexOf(obj.day);
    schedule[day] = [obj['from'], obj['to']];
  });

  const hoursArr = Object.values(schedule);

  let fromH = schedule[0][0];
  let lastH = schedule[0][1];
  let startDay = 0;
  const output = [];

  hoursArr.forEach((el, index) => {
    if (el[0] !== fromH) {
      if (index - startDay > 1) {
        const day1 = WEEK[startDay].toUpperCase();
        const day2 = WEEK[index - 1].toUpperCase();
        output.push(`${day1} - ${day2}: ${fromH} - ${lastH}`);
      } else {
        const day1 = WEEK[index - 1].toUpperCase();
        output.push(`${day1}: ${fromH} - ${lastH}`);
      }
      startDay = index;
      fromH = el[0];
    }

    if (index === 6) {
      const day6 = WEEK[6].toUpperCase();
      output.push(`${day6}: ${fromH} - ${lastH}`);
    }
  });

  return output;
};
