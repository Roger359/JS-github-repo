const cookingStatus = require("./script.js").cookingStatus;
const preparationTime = require("./script.js").preparationTime;
const quantities = require("./script.js").quantities;
const addSecretIngredient = require("./script.js").addSecretIngredient;
const scaleRecipe = require("./script.js").scaleRecipe;

describe("cookingStatus", () => {

  test('Function exists', () => {
    expect(typeof cookingStatus).toBe('function');
    expect(cookingStatus).toBeDefined();
  });

	test("returns 'You forgot to set the timer.' when remainingTime is undefined", () => {
		expect(cookingStatus()).toBe("You forgot to set the timer.");
	});
	test("returns 'You forgot to set the timer.' when remainingTime is negative", () => {
		expect(cookingStatus(-1)).toBe("You forgot to set the timer.");
	});
	test("returns 'Lasagna is done.' when remainingTime is 0", () => {
		expect(cookingStatus(0)).toBe("Lasagna is done.");
	});
	test("returns 'Not done, please wait.' when remainingTime is positive", () => {
		expect(cookingStatus(5)).toBe("Not done, please wait.");
	});
});

describe("preparationTime", () => {
  test('Function exists', () => {
    expect(typeof preparationTime).toBe('function');
    expect(preparationTime).toBeDefined();
  });

  test("calculates preparation time with default time per layer", () => {
    const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
    expect(preparationTime(layers)).toBe(12);
  });

  test("calculates preparation time with custom time per layer", () => {
    const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
    expect(preparationTime(layers, 3)).toBe(18);
  });
});

describe("quantities", () => {
  test('Function exists', () => {
    expect(typeof quantities).toBe('function');
    expect(quantities).toBeDefined();
  });

  test("calculates quantities of noodles and sauce", () => {
    const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
    expect(quantities(layers)).toEqual({ noodles: 100, sauce: 0.4 });
  });
});

describe("addSecretIngredient", () => {
  test('Function exists', () => {
    expect(typeof addSecretIngredient).toBe('function');
    expect(addSecretIngredient).toBeDefined();
  });

  test("adds secret ingredient from friend's list to my list", () => {
    const myList = ['noodles', 'sauce', 'cheese'];
    const friendList = ['tomatoes', 'basil', 'cheese', 'olive oil'];
    addSecretIngredient(friendList, myList);
    expect(myList[myList.length - 1]).toContain('olive oil');
  });

})

describe("scaleRecipe", () => {
  test('Function exists', () => {
    expect(typeof scaleRecipe).toBe('function');
    expect(scaleRecipe).toBeDefined();
  });
  
  test("scales recipe ingredients based on portions", () => {
    const recipe = { noodles: 200, sauce: 0.5, mozzarella: 1, meat: 100 };
    const scaled = scaleRecipe(recipe, 4);
    expect(scaled).toEqual({ noodles: 400, sauce: 1, mozzarella: 2, meat: 200 });
  });
});


