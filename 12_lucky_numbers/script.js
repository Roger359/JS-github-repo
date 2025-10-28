// Slot Machine: Lucky Numbers
/**
 * Adds two numbers represented as arrays of digits.
 * @param {Number[]} array1
 * @param {Number[]} array2
 * @returns {Number} sum of the two numbers
 */
function twoSum(array1, array2) {
	let newArray1 = Number(array1.join(""));
	let newArray2 = Number(array2.join(""));
	return newArray1 + newArray2;
}

/**
 * Checks if a positive number is a lucky number (palindrome).
 * @param {number} Positivenumber
 * @returns {boolean} true if lucky number, false otherwise
 */
function luckyNumber(Positivenumber) {
	let str = Positivenumber.toString();
	let reversedStr = str.split("").reverse().join("");
	if (str === reversedStr) {
		return true;
	} else {
		return false;
	}
}

function errorMessage(input) {
	if (!input) {
		return "Required field";
	}
	if (typeof input === "object" || isNaN(input)) {
		return "Must be a number besides 0";
	}
	const num = Number(input);
	if (num === 0) {
		return "Must be a number besides 0";
	}
	return "";
}

module.exports = { twoSum, luckyNumber, errorMessage };
