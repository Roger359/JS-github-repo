/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */

const knightIsAwake = false;
const archerIsAwake = false;
const prisonerIsAwake = false;
const petDogIsPresent = false;

function canExecuteFastAttack(knightIsAwake) {
	return !knightIsAwake; // false because we can execute a fast attack if the knight is awake
}

console.log(canExecuteFastAttack(knightIsAwake));

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
	return knightIsAwake || archerIsAwake || prisonerIsAwake; // no matter if just one of them is true we can spy
}
console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */
function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
	return prisonerIsAwake && !archerIsAwake;
}

console.log(canSignalPrisoner(archerIsAwake, prisonerIsAwake));

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */

function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
  if (petDogIsPresent) {
    // Si el perro está presente, basta con que el arquero esté dormido
    return !archerIsAwake;
  } else {
    // Si no hay perro, el prisionero debe estar despierto y los otros dormidos
    return prisonerIsAwake && !knightIsAwake && !archerIsAwake;
  }
}

console.log(
	canFreePrisoner(
		knightIsAwake,
		archerIsAwake,
		prisonerIsAwake,
		petDogIsPresent
	)
);

module.exports = {
	canExecuteFastAttack,
	canSpy,
	canSignalPrisoner,
	canFreePrisoner,
};
