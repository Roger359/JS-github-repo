/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */

const ratePerHour = 20;

function dayRate(ratePerHour) {
	return ratePerHour * 8;
}

console.log("Calculated day rate: $", dayRate(ratePerHour));

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */

const budget = 1000;

function daysInBudget(budget, ratePerHour) {
  // if dayRate is 0, return 0 to avoid division by zero
  if (dayRate(ratePerHour) === 0) {
    return 0;
  }
  // Calculate the number of days in a budget, rounded down
	return Math.floor(budget / dayRate(ratePerHour));
}

console.log("Calculated days in budget: ", daysInBudget(budget, ratePerHour) + " days");

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans // 22
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */

const numDays = 44;
const discount = 0.20;

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
	// Calculate the number of months
	let numMonths = Math.floor(numDays / 22);
	console.log("Number of Month calculated: ", numMonths);

	// Calculate the monthly rate
	let monthlyRate = 22 * dayRate(ratePerHour);
	console.log("Monthly Rate: ", monthlyRate);

	// Calculate the discounted rate for large projects
	let monthlyDiscontedRate = (1 - discount) * monthlyRate;
	console.log("Monthly value with discount: ", monthlyDiscontedRate);

  // Calculate the total price for the number of months
	let numExtraDays = numDays % 22;
	console.log("number of extra Days: ", numExtraDays);

  // Calculate the price for the extra days
	let priceExtraDays = numExtraDays * dayRate(ratePerHour);
	console.log("day Rate value:", dayRate(ratePerHour));
	console.log("Extra Days Rate Value:", priceExtraDays);
	
  // Return the total price rounded up
	return Math.ceil(numMonths * monthlyDiscontedRate + priceExtraDays);
}

console.log("Calculated discounted rate for large projects: $", priceWithMonthlyDiscount(ratePerHour, numDays, discount));

module.exports = {
  dayRate,
  daysInBudget,
  priceWithMonthlyDiscount,
};

