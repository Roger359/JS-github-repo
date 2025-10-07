const  remainingMinutesInOven = require('./script').remainingMinutesInOven
const  preparationTimeInMinutes = require('./script').preparationTimeInMinutes
const  totalTimeInMinutes = require('./script').totalTimeInMinutes
const  EXPECTED_MINUTES_IN_OVEN = require('./script').EXPECTED_MINUTES_IN_OVEN

test('the EXPECTED_MINUTES_IN_OVEN constant is defined', () => {
  expect(EXPECTED_MINUTES_IN_OVEN).toBeDefined()
})

test('the EXPECTED_MINUTES_IN_OVEN constant has the correct value', () => {
  expect(EXPECTED_MINUTES_IN_OVEN).toBe(40)
})

test('remainingMinutesInOven function exists', () => {
  expect(remainingMinutesInOven).toBeDefined()
})

test('remainingMinutesInOven function returns the expected value', () => {
  expect(remainingMinutesInOven(30)).toBe(10)
})

test('preparationTimeInMinutes function exists', () => {
  expect(preparationTimeInMinutes).toBeDefined()
})

test('preparationTimeInMinutes function returns the expected value', () => {
  expect(preparationTimeInMinutes(2)).toBe(4)
})

test('totalTimeInMinutes function exists', () => {
  expect(totalTimeInMinutes).toBeDefined()
})

test('totalTimeInMinutes function returns the expected value', () => {
  expect(totalTimeInMinutes(3, 20)).toBe(26)
})  