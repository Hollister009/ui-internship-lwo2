/**
 * golf-score - task output
 */

export const GOLF_SCORES = {
  HOLE_IN_ONE: 'Hole-in-one!',
  EAGLE: 'Eagle',
  BIRDIE: 'Birdie',
  PAR: 'Par',
  BOGEY: 'Bogey',
  DOUBLE_BOUGEY: 'Double Bogey',
  GO_HOME: 'Go Home!'};

export const golfScore = (par, stroke) => {
  if (stroke === 1) return GOLF_SCORES.HOLE_IN_ONE;
  else if (stroke <= par - 2) return GOLF_SCORES.EAGLE;
  else if (stroke === par - 1) return GOLF_SCORES.BIRDIE;
  else if (stroke === par) return GOLF_SCORES.PAR;
  else if (stroke === par + 1) return GOLF_SCORES.BOGEY;
  else if (stroke === par + 2) return GOLF_SCORES.DOUBLE_BOGEY;
  else if (stroke >= par + 3) return GOLF_SCORES.GO_HOME;
};
