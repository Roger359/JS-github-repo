/**
 * Calculates the total number of birds observed over a period.
 * @param {number[]} birdsPerday
 * @returns {number} totalBirds
 */

let birdsPerday = [
	5, 7, 3, 9, 6, 2, 4, 8, 10, 1, 5, 7, 3, 9, 6, 2, 4, 8, 10, 1, 5,
];

function totalBirdCount(birdsPerday) {
	let totalBirds = 0;
	for (let i = 0; i < birdsPerday.length; i++) {
		totalBirds += birdsPerday[i];
	}
	return totalBirds;
}

console.log(totalBirdCount(birdsPerday)); // Output: 115


/**
 * Calculates the total number of birds observed over a period.
 * @param {number[]} birdsPerday
 * @param {number} week
 * @returns {number} birdsInWeek
 */
function birdsInWeek(birdsPerday, week) {
  let totalBirds = 0;
  let startIndex = (week - 1) * 7; // Adjust for zero-based index
  let endIndex = week * 7; // Non-inclusive end index
  for (let i = startIndex; i < endIndex && i < birdsPerday.length; i++) {
    totalBirds += birdsPerday[i];
  }
  return totalBirds;
}

console.log(birdsInWeek(birdsPerday, 3)); // Output: 30


/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 * @param {number[]} birdsPerday
 * @returns {number[]} correctedBirdsPerday
 * 
 */

function fixBirdCountLog(birdsPerday) {

  let correctedBirdsPerday = [];
  
  for (let i = 0; i < birdsPerday.length; i++) {
    if (i % 2 === 1) {
      correctedBirdsPerday.push(birdsPerday[i] + 1);
    } else {
      correctedBirdsPerday.push(birdsPerday[i]);
    }
  }
  console.log(correctedBirdsPerday);
  return totalBirdCount(correctedBirdsPerday);
}
console.log(fixBirdCountLog(birdsPerday));

module.exports = {
  totalBirdCount,
  birdsInWeek,
  fixBirdCountLog,
};