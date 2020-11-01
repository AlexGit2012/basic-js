const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!/\d+/.test(sampleActivity)) return false;
  if (typeof sampleActivity !=="string") return false;

  let k = 0.693/HALF_LIFE_PERIOD

  let t = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/k)
  if (t<0 || isNaN(t) || !isFinite(t)) return false
    return t

  // 0.693
  //dateSample('1') => 22387 (or 22392 depending on formula used)

  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

