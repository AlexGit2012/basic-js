const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
  }
  calculateDepth(arr) {
    let depth = 1;
    let maxDepth = 1;
    if (arr.some(el=>Array.isArray(el))) {
      arr.forEach(el=>{
        if (Array.isArray(el)) {
          depth = 1 + this.calculateDepth(el)
          if (depth>maxDepth) maxDepth=depth;
        }
      })
      return maxDepth;
    }
    else {
      return  1;
    }
  }
};