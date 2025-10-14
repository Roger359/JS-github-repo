

const kind = 'dog';
const option1 = 'Volkswagen';
const option2 = 'Audi';
const originalPrice = 30000;
const age = 7;


/**
 * Determines whether a license is needed to operate a vehicle of the given kind.
 * @param {string} kind 
 * @returns 
 */
function needsLicense(kind) {

  if (kind === 'car' || kind === 'truck') {
    return true;
  }
  else{
    return false
  }
  
}

console.log(needsLicense(kind));

/**
 * 
 * @param {string} option1 
 * @param {string} option2 
 * @returns {string} a sentence of advice which option to choose
 */


// Choose between two potential vehicles to buy a decision that includes the option that comes first in dictionary order. 
function chooseVehicle(option1, option2) {
  if (option1.localeCompare(option2) < 0) {
    return `${option1} is clearly the better choice.`;
  }
  else{
    return option2;
  }
}
console.log(chooseVehicle(option1, option2));

// Calculate an estimate for the price of a used vehicle in the dealership
function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  }
  else if (age >= 3 && age <= 10) {
    return originalPrice * 0.7;
  }
  else{
    return originalPrice * 0.5;
  }
}

console.log(calculateResellPrice(originalPrice, age));

module.exports = { needsLicense, chooseVehicle, calculateResellPrice };