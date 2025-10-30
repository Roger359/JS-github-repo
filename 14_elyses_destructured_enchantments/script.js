const deck = [7, 8, 9, 0, 2, 3, 4, 5, 6];
const deck2 = [1, 2, 3];

/**
 * get the first card of the array
 * @param {number[]} deck
 * @returns {number}
 */

function getFirstCard(deck) {
	const [firstCard] = deck;
	return firstCard;
}

/**
 *
 * @param {number[]} deck
 * @returns {number}
 */
function getSecondCard(deck) {
	const [, secondCard] = deck;
	return secondCard;
}

/**
 *
 * @param {number[]} deck
 * @param {number} index1
 * @param {number} index2
 * @returns {number[]}
 */
function swapTwoCards(deck) {
	const [first, second] = [deck[0], deck[1]];

	// senior way
	// const newDeck = [...deck]
	// const [first, second, ...rest] = deck;
	// return [second, first, ...rest];

	// mid level way  --> slice es un metodo que copia todo el array
	// const newDeck = deck.slice();

	// junior level
	const newDeck = [];
	for (let i = 0; i < deck.length; i++) {
		newDeck[i] = deck[i];
	}

	// do the change
	newDeck[0] = second;
	newDeck[1] = first;

	return newDeck;
}
/**
 *
 * @param {number[]} deck
 * @returns {number[]} swappedDeck
 */
function shiftThreeCardsAround(deck) {
	const [top, middle, bottom, ...rest] = deck;
	return [middle, bottom, top, ...rest];

	// Was an alternative,  a bad one xD
	// const [top, middle, bottom] = deck;

	// const newDeck = [];
	// for (let i = 0; i < deck.length; i++) {
	// 	newDeck[i] = deck[i];
	// }

	// console.log(newDeck);

	// newDeck[2] = middle;
	// newDeck[1] = top;
	// newDeck[0] = bottom;

	// return newDeck;
}

const piles = {
	chosen: [1, 2, 3],
	disregarded: [4, 5, 6],
};

/**
 *
 * @param {Object} param0
 * @returns {number[]}
 */
function pickNamedPile({ chosen, disregarded }) {
	return chosen;
}

function swapNamedPile({ chosen, disregarded }) {
	return {
		chosen: disregarded,
		disregarded: chosen,
	};
}

console.log(swapNamedPile(piles))

module.exports = {
	getFirstCard,
	getSecondCard,
	swapTwoCards,
	shiftThreeCardsAround,
	pickNamedPile,
	swapNamedPile,
};
