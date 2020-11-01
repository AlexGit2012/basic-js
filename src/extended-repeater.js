const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str1 = `${str}`
  let separator;
  let additionSeparator;
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let addition = options.addition || ``;
  if (options.addition===false) addition = `${options.addition}`
  if (options.separator===undefined) separator="+"; else separator=options.separator
  if (options.additionSeparator===undefined) additionSeparator="|"; else additionSeparator=options.additionSeparator
  // throw new CustomError('Not implemented');
  // // remove line with error and write your code here
  let res = "";
  let additionArr = []
  let resArr = []
  for (let i =0; i<additionRepeatTimes; i++) additionArr.push(addition.toString())
  res = `${str1.toString()}${additionArr.join(additionSeparator)}`
  for (let i=0; i<repeatTimes; i++) resArr.push(res)
  res = resArr.join(separator)
  return res;
};
  