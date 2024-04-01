"use strict";

import { rollDice } from '../logic/dice.mjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const readline = require('readline');
const clear = require('console-clear');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function startMenu() {
  drawMainMenu();
};

/**
 * Draws the main menu of the Dice Roller program.
 * Displays available options for the user to choose from.
 * @returns {void}
 * @author Mattias Eriksson
 */
function drawMainMenu() {
  console.log(`\n***Welcome to the Dice Roller!***\n`);
  console.log(`**Please make your choice from below**\n`);
  console.log(`1) Roll a dice`);
  console.log(`2) Roll a dice with a modifier`);
  console.log(`3) Create a set of dies`);
  console.log(`4) Roll an existing set of dies\n`);
  console.log(`X) Exit the program\n`);

  rl.question(`Enter your choice: `, (input) => {
    handleMenuChoice(input);
  });
};

function diceRoll(sides) {
  if (Number.isInteger(parseInt(sides)) && parseInt(sides) > 0) {
    return rollDice(sides);
  } else {
    return `Number of sides must be a positive integer`;
  };
};

/**
 * Handles user menu choice and executes corresponding actions.
 * @param {string} choice - The user's menu choice.
 * @returns {void}
 * @author Mattias Eriksson
 */
function handleMenuChoice(choice) {

  switch (choice) {
    case '1':
      rl.question(`Enter number of sides: `, (input) => {
        const result = diceRoll(input);
        console.log(`Result: ${result}`);
        rl.question(`Press any key to continue...`, (input) => {
          clear();
          drawMainMenu();
        });
      });
      break;
    case '2':
      //TODO: create dice roller with modifier
      break;
    case '3':
      //TODO: create set creator function 
      break;
    case '4':
      //TODO: roll over a set
      break;
    case 'X':
    case 'x':
    //TODO: exit program
    default:
      console.log('Invalid choice, please select a valid option.');
  };
};

export function menuRun() {
  drawMainMenu();
};
