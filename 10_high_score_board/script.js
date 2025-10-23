/**
 *
 * @returns {Object} high score board object
 *
 */
let highScoreBoard = {};

function createScoreBoard() {
	highScoreBoard["The Best Ever"] = 1000000;

	return highScoreBoard;
}

/**
 *
 * @param {object} scoreBoard
 * @param {string} playerName
 * @param {number} score
 * @return {void}
 */
function addPlayer(scoreBoard, playerName, score) {
	scoreBoard[playerName] = score;
	return scoreBoard;
}

function removePlayer(scoreBoard, playerName) {
	delete scoreBoard[playerName];
	return scoreBoard;
}


function updateScore(scoreBoard, playerName, score) {
  scoreBoard[playerName] += score;
  return scoreBoard;
}

function applyMondayBonus(scoreBoard) {
  for (let player in scoreBoard) {
    scoreBoard[player] += 100;
  }
  return scoreBoard;
}

module.exports = { createScoreBoard, addPlayer, removePlayer, updateScore, applyMondayBonus };
