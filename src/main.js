"use strict";
import { createDice, createSet } from "./logic/dice.mjs";

console.log(JSON.stringify(createDice(20)));
console.log(JSON.stringify((createSet("test", 6, 20))));

const dice = createDice(6);
console.log(dice.roll(dice.sides));
console.log(dice.sides);
console.log(dice.roll());
console.log(dice.roll(100));
