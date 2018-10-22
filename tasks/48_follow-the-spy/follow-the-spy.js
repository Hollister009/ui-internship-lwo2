export const followTheSpy = (directions) => {
  const firstRoute = directions[0];
  directions.splice(0, 1);
  let routes = firstRoute;
  while (directions.length > 0) {
    for (let bin of directions) {
      if (bin.includes(routes[routes.length - 1])) {
        routes = routes.concat(bin[1]);
        directions.splice(directions.indexOf(bin), 1);
        break;
      }
    }
  }
  return routes.join(', ');
};
