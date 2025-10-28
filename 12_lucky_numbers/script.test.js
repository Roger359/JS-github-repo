const twoSum = require("./script").twoSum;
const luckyNumber = require("./script").luckyNumber;
const errorMessage = require("./script").errorMessage;

describe("twoSum", () => {

  test('function should be defined', () => {
    expect(typeof twoSum).toBe('function');
    expect(twoSum).toBeDefined();
  });


  test("should return the sum of two numbers formed by concatenating the elements of two arrays", () => {
    const array1 = [1,2,3];
    const array2 = [0,7];
    expect(twoSum(array1, array2)).toBe(130);
  });
});

describe("luckyNumber", () => {
  test('function should be defined', () => {
    expect(typeof luckyNumber).toBe('function');
    expect(luckyNumber).toBeDefined();
  });

  test("should return true for palindromic numbers", () => {
    expect(luckyNumber(12321)).toBe(true);
    expect(luckyNumber(1221)).toBe(true);
    expect(luckyNumber(7)).toBe(true);
  });

  test("should return false for non-palindromic numbers", () => {
    expect(luckyNumber(12345)).toBe(false);
    expect(luckyNumber(1234)).toBe(false);
    expect(luckyNumber(10)).toBe(false);
  }); 
});

describe("errorMessage", () => {
  test('function should be defined', () => {
    expect(typeof errorMessage).toBe('function');
    expect(errorMessage).toBeDefined();
  });

  test("should return 'Required field' for empty input", () => {
    expect(errorMessage("")).toBe("Required field");
    expect(errorMessage(null)).toBe("Required field");
    expect(errorMessage(undefined)).toBe("Required field");
  });

  test("should return 'Must be a number besides 0' for non-numeric input", () => {
    expect(errorMessage("abc")).toBe("Must be a number besides 0");
    expect(errorMessage([])).toBe("Must be a number besides 0");
    expect(errorMessage({})).toBe("Must be a number besides 0");
  });
});