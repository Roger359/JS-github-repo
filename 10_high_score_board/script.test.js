const createScoreBoard = require('./script').createScoreBoard;
const addPlayer = require('./script').addPlayer;
const removePlayer = require('./script').removePlayer;
const updateScore = require('./script').updateScore;
const applyMondayBonus = require('./script').applyMondayBonus;

test('function createScoreBoard exists', () => {
  expect(typeof createScoreBoard).toBe('function');
  expect(createScoreBoard()).toBeDefined();
});

test('createScoreBoard returns a high score board object', () => {
  const scoreBoard = createScoreBoard();
  expect(typeof scoreBoard).toBe('object');
  expect(scoreBoard).toHaveProperty('The Best Ever');
  expect(scoreBoard['The Best Ever']).toBe(1000000);
});


test('addPlayer function exists', () => {
  expect(typeof addPlayer).toBe('function');
});

test('addPlayer adds a player to the score board', () => {
  const scoreBoard = createScoreBoard();
  addPlayer(scoreBoard, 'Player One', 5000);
  expect(scoreBoard).toHaveProperty('Player One');
  expect(scoreBoard['Player One']).toBe(5000);
});

test('removePlayer function exists', () => {
  expect(typeof removePlayer).toBe('function');
});

test('removePlayer removes a player from the score board', () => {
  const scoreBoard = createScoreBoard();
  addPlayer(scoreBoard, 'Player One', 5000);
  removePlayer(scoreBoard, 'Player One');
  expect(scoreBoard).not.toHaveProperty('Player One');
});

test('updateScore function exists', () => {
  expect(typeof updateScore).toBe('function');
});

test('updateScore updates a player\'s score on the score board', () => {
  const scoreBoard = createScoreBoard();
  addPlayer(scoreBoard, 'Player One', 5000);
  updateScore(scoreBoard, 'Player One', 2500);
  expect(scoreBoard['Player One']).toBe(7500);
});

test('applyMondayBonus function exists', () => {
  expect(typeof applyMondayBonus).toBe('function');
});

test('applyMondayBonus adds 100 points to each player\'s score', () => {
  const scoreBoard = createScoreBoard();
  addPlayer(scoreBoard, 'Player One', 5000);
  addPlayer(scoreBoard, 'Player Two', 3000);
  applyMondayBonus(scoreBoard);
  expect(scoreBoard['Player One']).toBe(5100);
  expect(scoreBoard['Player Two']).toBe(3100);
});