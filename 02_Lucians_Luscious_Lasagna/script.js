/**
 * The number of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
*/

const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */

function remainingMinutesInOven(actualMinutesInOven) {
  return  EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}
console.log("Remaining Minutes In Oven: " + remainingMinutesInOven(30))


/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
function preparationTimeInMinutes(numberOfLayers) {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers
}

console.log("Preparation Time In Minutes: " + preparationTimeInMinutes(2))


/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}

console.log("Total Time In Minutes: " +  totalTimeInMinutes(6, 30))

module.exports = {
  EXPECTED_MINUTES_IN_OVEN,
  remainingMinutesInOven,
  preparationTimeInMinutes,
  totalTimeInMinutes
};