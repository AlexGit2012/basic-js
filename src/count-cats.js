const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let catCount = 0;
    matrix.map(el =>
        el.map(catEl => {
              if (catEl==="^^") catCount++
            }
        )
    )
    return catCount;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
};
