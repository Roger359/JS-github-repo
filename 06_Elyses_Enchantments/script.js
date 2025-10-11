/**
 *  Elyse's Enchantments
 * @param {string[]} stack - an array of items
 * @param {number} position - the position of the item to retrieve
 * @returns {string} the item at the specified position in the stack
 */

const stack = [
	"Ace of Diamonds",
	"2 of Hearts",
	"3 of Spades",
	"4 of Clubs",
	"5 of Diamonds",
];

// Random position in the stack
const position = (Math.random() * stack.length) | 0; // Random position using bitwise OR con 0

function getCard(stack, position) {
	
  if (typeof position !== "number") {
		throw new Error("Position must be a number");
	}
	if (position < 0 || position >= stack.length) {
		throw new Error("Position out of bounds");
	}

	return stack[position];
}
console.log(getCard(stack, position));

/**
 * Replace a card in the deck
 * @param {number[]} cards - an array of card numbers
 * @param {number} position2 - the position of the card to replace (1-based index)
 * @param {number} newCard - the new card number to insert
 * @returns {number[]} the modified array of cards
 */

let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let position2 = 6;
let newCard = 5;

function replaceCard(cards, position2, newCard) {
	cards.splice(position2 - 1, 1, newCard); // -1 to account for 0 index
	return cards; // Return the modified array
}

// console.log(replaceCard(cards, position2, newCard)); // Should print [1, 2, 3, 4, 5, 5, 7, 8, 9, 10]

/**
 * Add a new card to the end of the deck
 * @param {number[]} cards - an array of card numbers
 * @param {number} newCardToAdd - the new card number to add
 * @returns {number[]} the modified array of cards
 */

const newCardToAdd = 11;

function addCard(cards, newCardToAdd) {
	cards.push(newCardToAdd); // Add the new card to the end of the array
	return cards; // Return the modified array
}

// console.log(addCard(cards, newCardToAdd)); // Should print [1, 2, 3, 4, 5, 5, 7, 8, 9, 10, 11]

/**
 * Remove a card from the deck
 * @param {number[]} cards - an array of card numbers
 * @param {number} removeCardPosition - the position of the card to remove (1-based index)
 * @returns {number[]} the modified array of cards
 */
const removeCardPosition = 3;

function removeCard(cards, removeCardPosition) {
	cards.splice(removeCardPosition - 1, 1); // -1 to account for 0 index
	return cards; // Return the modified array
}

// console.log(removeCard(cards, removeCardPosition)); // Should print [1, 2, 4, 5, 5, 7, 8, 9, 10, 11]

/**
 *
 * @param {*} cards
 * @returns
 */
function removeCardFromTop(cards) {
	cards.pop(); // Remove the last card from the array
	return cards; // Return the modified array
}
console.log(removeCardFromTop(cards)); // 

/**
 * Add a new card to the bottom of the deck
 * @param {number[]} cards - an array of card numbers
 * @param {number} newCardToBottom - the new card number to add to the bottom
 * @returns {number[]} the modified array of cards
 */
const newCardToBottom = 0;
function addCardToBottom(cards, newCardToBottom) {
	cards.unshift(newCardToBottom); // Add the new card to the beginning of the array
	return cards; // Return the modified array
}

// console.log(addCardToBottom(cards, newCardToBottom)); // Should print [0, 1, 2, 4, 5, 5, 7, 8, 9, 10]

/**
 *
 * @param {*} cards
 * @returns
 */
function removeCardFromBottom(cards) {
	cards.shift(); // Remove the first card from the array
	return cards; // Return the modified array
}

// console.log(removeCardFromBottom(cards)); // Should print [1, 2, 4, 5, 5, 7, 8, 9, 10]

const stackSize = 8;

function checkStackSize(cards, stackSize) {
	return cards.length === stackSize; // Check if the length of the array is greater than or equal to stackSize
}

// console.log(checkStackSize(cards, stackSize)); // Should print true

module.exports = {
	getCard,
	replaceCard,
	addCard,
	removeCard,
	removeCardFromTop,
	removeCardFromBottom,
	checkStackSize,
};
