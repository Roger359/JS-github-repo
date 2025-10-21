const totalBirdCount = require("./script").totalBirdCount;
const birdsInWeek = require("./script").birdsInWeek;
const fixBirdCountLog = require("./script").fixBirdCountLog;

test("totalBirdCount function exists", () => {
	expect(totalBirdCount).toBeDefined();
});
test("birdsInWeek function exists", () => {
	expect(birdsInWeek).toBeDefined();
});
test("fixBirdCountLog function exists", () => {
	expect(fixBirdCountLog).toBeDefined();
});

test("totalBirdCount function should return the correct total number of birds", () => {
	const birdsPerday = [
		5, 7, 3, 9, 6, 2, 4, 8, 10, 1, 5, 7, 3, 9, 6, 2, 4, 8, 10, 1, 5,
	];
	expect(totalBirdCount(birdsPerday)).toBe(115);
});

test("birdsInWeek function should return the correct number of birds for a given week", () => {
	const birdsPerday = [
		5, 7, 3, 9, 6, 2, 4, 8, 10, 1, 5, 7, 3, 9, 6, 2, 4, 8, 10, 1, 5,
	];
	expect(birdsInWeek(birdsPerday, 3)).toBe(36); 
	expect(birdsInWeek(birdsPerday, 1)).toBe(36); 
});

test("fixBirdCountLog function should return the corrected bird counts", () => {
	const birdsPerday = [5, 7, 3, 9, 6, 2, 4];
	const corrected = fixBirdCountLog(birdsPerday);
	console.log(corrected);
	expect(corrected).toEqual(39); // Corrected counts: [5, 8, 3, 10, 6, 3, 4] => Total: 39 
});
