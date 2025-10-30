const getFirstCard = require("./script.js").getFirstCard;
const getSecondCard = require("./script.js").getSecondCard;
const swapTwoCards = require("./script.js").swapTwoCards;
const shiftThreeCardsAround = require("./script.js").shiftThreeCardsAround;
const pickNamedPile = require("./script.js").pickNamedPile;
const swapNamedPile = require("./script.js").swapNamedPile;

describe("getFirstCard", () => {
	test("function exists", () => {
		expect(typeof getFirstCard).toBe("function");
		expect(getFirstCard).toBeDefined();
	});

	test("the function returns the first card", () => {
		const deck = [7, 8, 9, 0, 2, 3, 4, 5, 6];
		expect(getFirstCard(deck)).toBe(7);
	});
});

describe("getSecondCard", () => {
	test("function exists", () => {
		expect(typeof getSecondCard).toBe("function");
		expect(getSecondCard).toBeDefined();
	});

	test("the function returns the second card", () => {
		const deck = [7, 8, 9, 0, 2, 3, 4, 5, 6];
		expect(getSecondCard(deck)).toBe(8);
	});
});

describe("swapTwoCards", () => {
	test("function exists", () => {
		expect(typeof swapTwoCards).toBe("function");
		expect(swapTwoCards).toBeDefined();
	});

	test("the function returns an arrar with two cars swaped ", () => {
		const deck = [6, 3];
		expect(swapTwoCards(deck)).toStrictEqual([3, 6]);
	});
});

describe("shiftThreeCardsAround", () => {
	test("function exists", () => {
		expect(typeof shiftThreeCardsAround).toBe("function");
		expect(shiftThreeCardsAround).toBeDefined();
	});

	test("the function returns an array with the positions swapped ", () => {
		const deck = [7, 8, 9, 0, 2, 3, 4, 5, 6];
		expect(shiftThreeCardsAround(deck)).toStrictEqual([8, 9, 7, 0, 2, 3, 4, 5, 6]);
	});
});

describe("pickNamedPile", () => {
	test("function exists", () => {
		expect(typeof pickNamedPile).toBe("function");
		expect(pickNamedPile).toBeDefined();
	});

	test("the function returns the chosen from a object with two arrays ", () => {
		const piles = {
			chosen: [1, 2, 3],
			disregarded: [4, 5, 6],
		};
		expect(pickNamedPile(piles)).toEqual([1, 2, 3]);
	});
});

describe("swapNamedPile", () => {
	test("function exists", () => {
		expect(typeof swapNamedPile).toBe("function");
		expect(swapNamedPile).toBeDefined();
	});

	test("the function returns a object with the chosen and disregarded arrays swapped", () => {
		const piles = {
			chosen: [1, 2, 3],
			disregarded: [4, 5, 6],
		};
		expect(swapNamedPile(piles)).toEqual({ chosen: [ 4, 5, 6 ], disregarded: [ 1, 2, 3 ] }
);
	});
});
