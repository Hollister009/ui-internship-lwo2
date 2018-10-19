export const peopleInBus = (bus) => {
  let peopleInBus = 0;
  bus.forEach((stop) => {
    peopleInBus += stop[0];
    peopleInBus -= stop[1];
  });
  return peopleInBus;
};
