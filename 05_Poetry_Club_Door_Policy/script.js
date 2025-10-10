/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
function frontDoorResponse(line) {
  // trim any whitespace
  line = line.trim();
	console.log("The first Letter is: ", line[0]);
	return line[0];
}

let text = "Stands so high";

frontDoorResponse(text);

/**
 *  Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 * @param {*} word
 * @returns   {string}
 */

function frontDoorPassword(word) {
	// trim any whitespace
	let trimmedWord = word.trim();
	console.log("Trimmed word is: ", trimmedWord);
	// make the first letter uppercase and the rest lowercase
	let lowerCasedWord = trimmedWord.toLowerCase();
	console.log("Lower cased word is: ", lowerCasedWord);
	// capitalize the first letter
	let capitalizedWord =
		lowerCasedWord[0].toUpperCase() + lowerCasedWord.slice(1);
	console.log("Capitalized word is: ", capitalizedWord);
	//  return the formatted word
	return capitalizedWord;
}

let text2 = "  hELLO  ";
frontDoorPassword(text2);

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 * @param {*} line
 * @returns   {string}
 */

function backDoorResponse(line) {
	// trim any whitespace
	let trimmedLine = line.trim();
	console.log("Trimmed line is: ", trimmedLine);
	// get the last letter of the trimmed line
	let lastLetter = trimmedLine[trimmedLine.length - 1];
	console.log("The last letter is: ", lastLetter);

	return lastLetter;
}

let text3 = "  Stands so high  ";
backDoorResponse(text3);

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
function backDoorPassword(word) {
	// use the frontDoorPassword function to format the word
	return frontDoorPassword(word) + ', please';
}

let text4 = "  Stands so high  ";
console.log(backDoorPassword(text4));

module.exports = {
	frontDoorResponse,
	frontDoorPassword,
	backDoorResponse,
	backDoorPassword,
};
