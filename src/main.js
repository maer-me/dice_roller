"use strict";
import { diceRoll } from "./logic/dice.mjs";

console.log("Script connection succesful");
console.log(`First dice roll: ${diceRoll()}`);
console.log(`SEcond dice roll with parameter "6": ${diceRoll(6)}`);
console.log(`Fourth dice roll with parameters "6" and "100" ${diceRoll(6, 100)}`);
