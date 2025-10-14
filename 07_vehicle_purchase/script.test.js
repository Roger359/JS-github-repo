const needsLicense = require("./script.js").needsLicense;
const chooseVehicle = require("./script.js").chooseVehicle;
const calculateResellPrice = require("./script.js").calculateResellPrice;

test("Functions are defined", () => {
	expect(needsLicense).toBeDefined();
	expect(chooseVehicle).toBeDefined();
	expect(calculateResellPrice).toBeDefined();
});

test("needsLicense function works for car", () => {
	expect(needsLicense("car")).toBe(true);
	expect(needsLicense("truck")).toBe(true);
	expect(needsLicense("bike")).toBe(false);
});

test("chooseVehicle function chooses the correct vehicle", () => {
	expect(chooseVehicle("Volkswagen", "Zeta")).toBe(
		"Volkswagen is clearly the better choice."
	);
	expect(chooseVehicle("BMW", "Audi")).toBe("Audi");
});

test("calculateResellPrice function calculates price for age < 3", () => {
	expect(calculateResellPrice(30000, 2)).toBe(24000);
	expect(calculateResellPrice(30000, 5)).toBe(21000);
	expect(calculateResellPrice(30000, 15)).toBe(15000);
});
