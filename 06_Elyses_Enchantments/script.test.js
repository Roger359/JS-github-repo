const getCard = require("./script.js").getCard;
const replaceCard = require("./script.js").replaceCard;
const addCard = require("./script.js").addCard;
const removeCard = require("./script.js").removeCard;
const removeCardFromTop = require("./script.js").removeCardFromTop;
const removeCardFromBottom = require("./script.js").removeCardFromBottom;
const checkStackSize = require("./script.js").checkStackSize;

test("getCard should return the correct card from the stack", () => {
	const stack = [
		"Ace of Diamonds",
		"2 of Hearts",
		"3 of Spades",
		"4 of Clubs",
		"5 of Diamonds",
	];
	expect(getCard(stack, 3 - 1)).toBe("3 of Spades");
	//expect(getCard(stack, true)).toThrow("Position must be a number");
	expect(() => getCard(stack, true)).toThrow("Position must be a number");
	expect(() => getCard(stack, -1)).toThrow("Position out of bounds");
	expect(() => getCard(stack, 10)).toThrow("Position out of bounds");
	expect(() => getCard(stack, "a")).toThrow("Position must be a number");
});

test("replaceCard should replace the card at the given position", () => {
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let position2 = 6;
  let newCard = 5;
  expect(replaceCard(cards, position2, newCard)).toEqual([1, 2, 3, 4, 5, 5, 7, 8, 9, 10]);
});

test("addCard should add a new card to the end of the deck", () => {
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newCardToAdd = 11;
  expect(addCard(cards, newCardToAdd)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});

test("removeCard should remove the card at the given position", () => {
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let position3 = 4;
  expect(removeCard(cards, position3)).toEqual([1, 2, 3, 5, 6, 7, 8, 9, 10]);
});

test("removeCardFromTop should remove the top card from the deck", () => {
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(removeCardFromTop(cards)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("removeCardFromBottom should remove the bottom card from the deck", () => {
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(removeCardFromBottom(cards)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
  
test("checkStackSize should return true if the stack size is correct", () => {           
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let stackSize = 10;
  expect(checkStackSize(cards, stackSize)).toBe(true);      
});