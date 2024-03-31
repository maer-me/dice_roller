"use strict";


export function diceRoll(sides = 20, mod = 0) {
  return Math.round(Math.random() * sides) + mod;
};

export function createSet(name = "", numDice, sides) {
  const set = {
    "name": name,
    "set": []
  };

  for (let i = 0; i < numDice; i++) {
    const dice = createDice(sides);
    set.set.push(dice);
  };
  return set;
};

export function createDice(sides) {
  const dice = {
    "sides": sides
  }
  return dice;
};
