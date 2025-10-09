const dayRate = require('./script').dayRate
const daysInBudget = require('./script').daysInBudget
const priceWithMonthlyDiscount = require('./script').priceWithMonthlyDiscount

test('dayRate function exists', () => { 
  expect(dayRate).toBeDefined() // checks if the function is defined
})

test('dayRate function returns the expected value', () => { // checks if the function returns the expected value
  expect(dayRate(89)).toBe(712) // 89 * 8 = 712
  expect(dayRate(0)).toBe(0) // 0 * 8 = 0
  expect(dayRate(10)).toBe(80) // 10 * 8 = 80
})

test('daysInBudget function exists', () => { 
  expect(daysInBudget).toBeDefined() // checks if the function is defined
})

test('daysInBudget function returns the expected value', () => { // checks if the function returns the expected value
  expect(daysInBudget(1000, 89)).toBe(1) // budget / day rate = days () 1000 / (89 * 8) = 1.40 -> rounded down to 1
  expect(daysInBudget(5000, 100)).toBe(6) // budget / day rate = days () 5000 / (100 * 8) = 6.25 -> rounded down to 6
  expect(daysInBudget(0, 50)).toBe(0) // budget / day rate = days () 0 / (50 * 8) = 0 -> rounded down to 0
  expect(daysInBudget(200, 20)).toBe(1) // budget / day rate = days () 200 / (20 * 8) = 1.25 -> rounded down to 1
  expect(daysInBudget(100, 0)).toBe(0) // budget / day rate = days () 100 / (0 * 8) = 0 -> rounded down to 0
})

test('priceWithMonthlyDiscount function exists', () => { 
  expect(priceWithMonthlyDiscount).toBeDefined() // checks if the function is defined
})

test('priceWithMonthlyDiscount function returns the expected value', () => {
  expect(priceWithMonthlyDiscount(20, 44, 0.20)).toBe(5632) // (44/22) * ((1 - 0.20) * (22 * 20 * 8)) + ((44 % 22) *  20 * 8) = 5632 -> rounded up to 5632
  expect(priceWithMonthlyDiscount(89, 230, 0.42)).toBe(97972) // (230/22) * ((1 - 0.42) * (22 * 89 * 8)) + ((230 % 22) *  89 * 8) = 97971.2 -> rounded up to 97972
  expect(priceWithMonthlyDiscount(0, 100, 0.50)).toBe(0) // (100/22) * ((1 - 0.50) * (22 * 0 * 8)) + ((100 % 22) *  0 * 8) = 0 -> rounded up to 0
  expect(priceWithMonthlyDiscount(50, 0, 0.10)).toBe(0) // (0/22) * ((1 - 0.10) * (22 * 50 * 8)) + ((0 % 22) *  50 * 8) = 0 -> rounded up to 0
  
})// checks if the function returns the expected Value