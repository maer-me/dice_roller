"use strict";
import { createDice, createSet } from "./logic/dice.mjs";


const dice = createDice(6);
console.log(dice.roll(dice.sides));
console.log(dice.sides);
console.log(dice.roll());
console.log(dice.roll(100));

const set = createSet("test", 6, 100);
console.log(set.name);
console.log(set.set);

const testSet = [];
for (let i = 0; i < set.set.length; i++) {
  testSet.push(set.set[i].roll());
};

console.log(testSet);
