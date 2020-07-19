export const rollDie = (sides: number = 6): number => {
  let roll: number = Math.floor(Math.random() * sides) + 1;

  return roll;
};
