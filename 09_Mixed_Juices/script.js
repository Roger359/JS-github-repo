/**
 *
 * @param {string} juice
 * @returns {number} time in minutes to mix the juice
 */
function timeToMixJuice(juice) {
	switch (juice) {
		case "Pure Strawberry Joy":
			return 0.5;
			break;
		case "Energizer":
		case "Green Garden":
			return 1.5;
			break;
		case "Tropical Island":
			return 3;
			break;
		case "All or Nothing":
			return 5;
			break;
		default:
			return 2.5;
			break;
	}
}

/**
 *
 * @param {number} number of lime wedges Li Mei needs to cut
 * @param {string[]} limes array of lime sizes
 * @returns {number} limesCut  is number of limes cut
 */

// function limesToCut(wedgesNeeded, limes) {
// 	let wedgesCut = 0;
// 	let limesCut = 0;
// 	const wedgesPerLime = {
// 		small: 6,
// 		medium: 8,
// 		large: 10,
// 	};

// 	for (let i = 0; i < limes.length; i++) {
// 		const limeSize = limes[i];
//     console.log(limeSize);
// 		const wedgesFromLime = wedgesPerLime[limeSize] || 0;
// 		if (wedgesCut >= wedgesNeeded) break;

// 		wedgesCut += wedgesFromLime;
// 		limesCut++;
// 	}

// 	return limesCut;
// }

/**
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns  number of limes cut
 */
function limesToCut(wedgesNeeded, limes) {
	const wedgesPerLime = {
		small: 6,
		medium: 8,
		large: 10,
	};

	let wedgesCut = 0;
	let limesCut = 0;
	let i = 0;

	while (i < limes.length && wedgesCut < wedgesNeeded) {
		const limeSize = limes[i];
		wedgesCut += wedgesPerLime[limeSize] || 0;
		limesCut++;
		i++;
	}

	return limesCut;
}

/**
 * @param {string[]} orders
 * @param {number} timeLeft
 * @returns {string[]} remaining orders after time is up
 */

function remainingOrders(timeLeft, orders) {
	let timeUsed = 0;
	let i = 0;

	while (i < orders.length && timeUsed < timeLeft) {
		const juice = orders[i];
		timeUsed += timeToMixJuice(juice);
		i++;
	}

	return orders.slice(i);
}

module.exports = { timeToMixJuice, limesToCut, remainingOrders };
