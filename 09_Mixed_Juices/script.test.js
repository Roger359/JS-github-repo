const timeToMixJuice = require("./script").timeToMixJuice;
const limesToCut = require("./script").limesToCut;
const remainingOrders = require("./script").remainingOrders;

test("timeToMixJuice function exists", () => {
	expect(typeof timeToMixJuice).toBe("function");
	expect(timeToMixJuice).toBeDefined();
});

test("returns the correct time for every juice", () => {
	expect(timeToMixJuice("Pure Strawberry Joy")).toBe(0.5);
	expect(timeToMixJuice("Energizer")).toBe(1.5);
	expect(timeToMixJuice("Green Garden")).toBe(1.5);
	expect(timeToMixJuice("Tropical Island")).toBe(3);
	expect(timeToMixJuice("All or Nothing")).toBe(5);
	expect(timeToMixJuice("Other Juice")).toBe(2.5);
});

test("limesToCut function exists", () => {
	expect(typeof limesToCut).toBe("function");
	expect(limesToCut).toBeDefined();
});

test("returns the correct number of limes to cut", () => {
	expect(limesToCut(25, ["small", "small", "small", "small", "small"])).toBe(5); // 5 small limes = 30 wedges
	expect(limesToCut(26, ["small", "small", "small", "small", "small"])).toBe(5); // 5 small limes = 30 wedges
	expect(limesToCut(0, ["small", "medium", "large"])).toBe(0); // No wedges needed
	expect(limesToCut(15, ["large", "large"])).toBe(2); // 2 large limes = 20 wedges
	expect(limesToCut(18, ["medium", "medium", "medium"])).toBe(3); // 3 medium limes = 24 wedges
	expect(limesToCut(7, ["small", "medium", "large"])).toBe(2); // 1 small + 1 medium = 14 wedges
	expect(limesToCut(50, ["large", "large", "large", "large", "large"])).toBe(5); // 5 large limes = 50 wedges
});

test("remainingOrders function exists", () => {
  expect(typeof remainingOrders).toBe("function");
  expect(remainingOrders).toBeDefined();
});

test("returns the correct remaining orders", () => {
  expect(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden'])).toEqual(['Green Garden']);
  expect(remainingOrders(10, ['Tropical Island', 'Energizer', 'Pure Strawberry Joy'])).toEqual([]);
  expect(remainingOrders(3, ['All or Nothing', 'Tropical Island', 'Energizer'])).toEqual(['Tropical Island', 'Energizer']);
  expect(remainingOrders(0.5, ['Pure Strawberry Joy', 'Energizer'])).toEqual(['Energizer']);
  expect(remainingOrders(7, ['All or Nothing', 'All or Nothing'])).toEqual([]);
});