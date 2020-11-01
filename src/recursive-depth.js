const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.dept = 1;
    this.maxDept = 1;
  }

  calculateDepth(arr) {
    // let dept = 1;
    // let maxDept = 1;

    if (arr.length===0) return ;
    arr.map(el=>{
      if (Array.isArray(el)) {
        this.dept+=1;
        if (this.dept>this.maxDept) this.maxDept = this.dept;
        this.calculateDepth(el);
        this.dept-=1;
      }
    })



    return this.maxDept

    // throw new CustomError('Not implemented');
    // // remove line with error and write your code here
  }
};