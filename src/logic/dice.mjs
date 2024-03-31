"use strict";

/**
 * Creates a set of dice with the specified parameters.
 * @param {string} [name=""] - The name of the set (optional, defaults to an empty string).
 * @param {number} numDice - The number of dice to create in the set.
 * @param {number} sides - The number of sides for each dice in the set.
 * @returns {Object} - The created set object containing dice.
 * @author Mattias Eriksson
 */
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

/**
 * Creates a dice object with a specified number of sides.
 * @param {number} sides - The number of sides for the dice.
 * @returns {Object} - The dice object with a 'roll' method and 'sides' property.
 * @author Mattias Eriksson
 */
export function createDice(sides) {
  /**
       * Rolls the dice with an optional modifier and returns the outcome.
       * @param {number} [modifier=0] - The modifier to be added to the roll result (optional, defaults to 0).
       * @returns {number} - The outcome of the roll with the modifier.
       */
  function roll(modifier = 0) {
    return Math.floor(Math.random() * sides) + 1 + modifier;
  }

  return {
    roll: roll,
    sides: sides
  };
}

