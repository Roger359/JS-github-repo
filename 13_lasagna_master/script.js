/**
 *
 * @param {number} remainingTime
 * @returns {string} 
 */

function cookingStatus(remainingTime) {
	if (
		typeof remainingTime !== "number" ||
		remainingTime < 0 ||
		remainingTime === undefined
	) {
		return "You forgot to set the timer.";
	}
	if (remainingTime === 0) {
		return "Lasagna is done.";
	}

	if (remainingTime >= 0) {
		return "Not done, please wait.";
	}
}

const layers = [
	"sauce",
	"noodles",
	"sauce",
	"meat",
	"mozzarella",
	"noodles",
	"sauce",
];

/**
 *
 * @param {string[]} layers
 * @param {number} timePerLayer
 * @returns {number} 
 */
function preparationTime(layers, timePerLayer = 2) {
	return layers.length * timePerLayer;
}

/**
 *
 * @param {string[]} layers
 * @returns {Object} 
 */
function quantities(layers) {
	let noodlesQuantity = 0;
	let sauceQuantity = 0;

	for (let i = 0; i < layers.length; i++) {
		if (layers[i] === "noodles") {
			noodlesQuantity += 50;
		} else if (layers[i] === "sauce") {
			sauceQuantity += 0.2;
		}
	}
	return {
		noodles: noodlesQuantity,
		sauce: sauceQuantity,
	};
}

const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
const myList = ["noodles", "meat", "sauce", "mozzarella"];

/**
 *
 * @param {string[]} friends
 * @param {string[]} myList
 */
function addSecretIngredient(friends, myList) {
	const secretIngredient = friends[friends.length - 1];
	myList.push(secretIngredient);
}

const recipe = {
	noodles: 200,
	sauce: 0.5,
	mozzarella: 1,
	meat: 100,
};

/**
 *
 * @param {Object} recipe
 * @param {number} portions
 * @returns {Object} 
 */

function scaleRecipe(recipe, portions) {
	const scaledRecipe = {};
  const factor = portions / 2;
	for (const ingredient in recipe) {
		scaledRecipe[ingredient] = recipe[ingredient] * factor;
	}
	return scaledRecipe;
}

console.log(scaleRecipe(recipe, 4));

// Scale for 4 portions

module.exports = {
	cookingStatus,
	preparationTime,
	quantities,
	scaleRecipe,
	addSecretIngredient,
  scaleRecipe,
};
