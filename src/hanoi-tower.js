const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2**disksNumber - 1
  let oneTurnSpeed = 3600/turnsSpeed
  let seconds = Math.floor(oneTurnSpeed*turns)
  return {turns, seconds}
  // throw new CustomError('Not implemented');
  // // remove line with error and write your code here
};
