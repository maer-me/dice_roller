"use strict";


export function diceRoll(sides = 20, mod = 0) {
  return Math.round(Math.random() * sides) + mod;
};

