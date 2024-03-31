"use strict";


export function diceRoll(sides = 20, mod = 0) {
  return Math.round(Math.random() * sides) + mod;
};

export function dice_sets(name, no_dice, sides) {

}

export function createDice(sides) {
  const dice = {
    "sides": sides
  }
  return dice;
};
