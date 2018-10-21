export const peopleInBus = (bus) => {
  let peopleInBus = 0;
  bus.forEach(([getIn, getOut]) => {
    peopleInBus = peopleInBus + getIn - getOut;
  });
  return peopleInBus;
};
