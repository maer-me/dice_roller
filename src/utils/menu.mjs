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

/**
 * Draws the main menu of the Dice Roller program.
 * Displays available options for the user to choose from.
 * Prompts user for input and calls handler function.
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


/**
 * Rolls a dice with the specified number of sides by calling the rollDice function.
 * @param {string} sides - The number of sides for the dice.
 * @returns {number|string} - The outcome of the dice roll, or an error message if the input is invalid.
 */
function diceRoll(sides, modifier = 0) {
  if (Number.isInteger(parseInt(sides)) && parseInt(sides) > 0
    && Number.isInteger(parseInt(modifier))) {
    return rollDice(sides, modifier);
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
      rl.question(`Enter number of sides: `, (input) => {
        const sides = input;
        rl.question(`Enter modifier: `, (input) => {
          const modifier = input;
          const result = rollDice(sides, modifier);
          console.log(`Result: ${result}`);
          rl.question(`Press any key to continue...`, (input) => {
            clear();
            drawMainMenu();
          });
        });
      });
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
      console.log(`Exiting program, see you again!`);
      process.exit(0);
    default:
      console.log('Invalid choice, please select a valid option.');
  };
};

export function menuRun() {
  drawMainMenu();
};
