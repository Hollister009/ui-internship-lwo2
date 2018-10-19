export const rowWeights = (players) => {
  let team1 = 0;
  let team2 = 0;
  players.forEach((player, index) => {
    (index + 1) % 2 !== 0 ? team1 += player : team2 += player;
  });
  return [team1, team2];
};
