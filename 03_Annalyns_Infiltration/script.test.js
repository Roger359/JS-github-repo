const canExecuteFastAttack = require('./script').canExecuteFastAttack
const canSpy = require('./script').canSpy
const canSignalPrisoner = require('./script').canSignalPrisoner
const canFreePrisoner = require('./script').canFreePrisoner

test('canExecuteFastAttack function exists', () => { 
  expect(canExecuteFastAttack).toBeDefined() // checks if the function is defined
})

test('canExecuteFastAttack function returns the expected value', () => { // checks if the function returns the expected value
  expect(canExecuteFastAttack(false)).toBe(true) // we can execute a fast attack if the knight is asleep
  expect(canExecuteFastAttack(true)).toBe(false) // false because we can execute a fast attack if the knight is awake
})

test('canSpy function exists', () => { 
  expect(canSpy).toBeDefined() // checks if the function is defined
})

test('canSpy function returns the expected value', () => { // checks if the function returns the expected value
  expect(canSpy(false, false, false)).toBe(false) // we can't spy if everyone is asleep
  expect(canSpy(true, false, false)).toBe(true) // no matter if just one of them is true we can spy
  expect(canSpy(false, true, false)).toBe(true) // no matter if just one of them is true we can spy
  expect(canSpy(false, false, true)).toBe(true) // no matter if just one of them is true we can spy
  expect(canSpy(true, true, true)).toBe(true) // no matter if just one of them is true we can spy
})

test('canSignalPrisoner function exists', () => { // checks if the function is defined
  expect(canSignalPrisoner).toBeDefined()
})

test('canSignalPrisoner function returns the expected value', () => { // checks if the function returns the expected value
  expect(canSignalPrisoner(false, false)).toBe(false) // we can't signal if the prisoner is asleep
  expect(canSignalPrisoner(true, false)).toBe(false) // we can't signal if the prisoner is asleep
  expect(canSignalPrisoner(false, true)).toBe(true) // we can signal if the prisoner is awake and the archer is not
  expect(canSignalPrisoner(true, true)).toBe(false) // we can't signal if the archer is awake
})

test('canFreePrisoner function exists', () => {
  expect(canFreePrisoner).toBeDefined()  // checks if the function is defined
})

test('canFreePrisoner function returns the expected value', () => { // checks if the function returns the expected value
  expect(canFreePrisoner(false, false, false, false)).toBe(false) // we can't free the prisoner if everyone is asleep and the dog is not present
  expect(canFreePrisoner(false, false, true, false)).toBe(true) // we can free the prisoner if the prisoner is awake and the dog is not present
  expect(canFreePrisoner(false, true, false, false)).toBe(false) // we can't free the prisoner if the archer is awake and the dog is not present
  expect(canFreePrisoner(false, true, true, false)).toBe(false) // we can't free the prisoner if the archer is awake and the dog is not present
  expect(canFreePrisoner(true, false, false, false)).toBe(false) // we can't free the prisoner if the knight is awake and the dog is not present
  expect(canFreePrisoner(true, false, true, false)).toBe(false) // we can't free the prisoner if the knight is awake and the dog is not petDogIsPresent }
  expect(canFreePrisoner(true, true, false, false)).toBe(false) // we can't free the prisoner if the knight is awake and the dog is not present
  expect(canFreePrisoner(true, true, true, false)).toBe(false) // we can't free the prisoner if the knight is awake and the dog is not present
  expect(canFreePrisoner(false, false, false, true)).toBe(true) // we can free the prisoner if the dog is present
  expect(canFreePrisoner(false, false, true, true)).toBe(true) // we can free the prisoner if the dog is present
  expect(canFreePrisoner(false, true, false, true)).toBe(false) // we can't free the prisoner if the archer is awake even if the dog is present
  expect(canFreePrisoner(false, true, true, true)).toBe(false) // we can't free the prisoner if the archer is awake even if the dog is present
  expect(canFreePrisoner(true, false, false, true)).toBe(true) // we can free the prisoner if the dog is present
  expect(canFreePrisoner(true, false, true, true)).toBe(true) // we can free the prisoner if the dog is present
  expect(canFreePrisoner(true, true, false, true)).toBe(false) // we can free the prisoner if the dog is present
  expect(canFreePrisoner(true, true, true, true)).toBe(false) // we can free the prisoner if the dog is present
})